import fs from 'fs';

// Read the WASM file
// Will contain the bytecode in a Buffer
// <Buffer 00 61 73 6d 01 00 00 00 01 06 01 60 01 7f 01 7f 03 02 01 00 07 0a 01 06 73 71 75 61 72 65 00 00 0a 09 01 07 00 20 00 20 00 6c 0b>
const mathWasm = fs.readFileSync('../dist/math.wasm');

// Instantate the bytecode and save the exported values in a const
const math = await WebAssembly.instantiate(new Uint8Array(mathWasm))
    // Return the exported code back to top level
    .then(res => res.instance.exports);

// Math is now an equivalent of an ES6 Module!

// Now let's test out module:

console.log(math.square(10)); // 100
console.log(math.square(5)); // 25
console.log(math.square(3)); // 9
console.log(math.square(11)); // 121
console.log(math.square(12)); // 144

// But remember, we defined our square function to accept and return i32 values, 
// so passing in floating points will not work as intended!
console.log(math.square(15.123)); // Will return 225 as the integer value of 15.123 equals 15!
