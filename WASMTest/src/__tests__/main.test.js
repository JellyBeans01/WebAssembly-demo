
const fs = require('fs');
const path = require('path');

describe('main.wasm Tests', () => {
  let wasmInstance;

  beforeAll(async () => {
    // Load wasm file
    const wasmPath = path.resolve(__dirname, '../../dist', 'main.wasm');
    const buffer = fs.readFileSync(wasmPath);

    // Get module's contents
    const results = await WebAssembly.instantiate(buffer, { env: { abort: console.log } });

    // Apply to a single instance to be tested
    wasmInstance = results.instance.exports;
  });

  describe('add()', () => {
    test('returns 300 when 100 and 200 are passed in', () => {
      const result = wasmInstance.add(100, 200);

      expect(result).toEqual(300);
    });

    test('returns -20 when -10 and -10 are passed in', () => {
      const result = wasmInstance.add(-10, -10);

      expect(result).toEqual(-20);
    });
  });

  describe('divide()', () => {
    test.each([
      [10, 100, 10],
      [-2, -10, 5],
    ])('returns %f when %f and %f are passed in', (expected, a, b) => {
      const result = wasmInstance.divide(a, b);

      expect(result).toEqual(expected);
    });

    test('returns ~3.77 when 20.75 and 5.5 are passed in', () => {
      const result = wasmInstance.divide(20.75, 5.5);

      expect(result).toBeCloseTo(3.77, 2);
    });
  });
});