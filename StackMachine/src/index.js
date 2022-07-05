import fs from 'fs';

const mathWasm = fs.readFileSync('../dist/math.wasm');
const math = await WebAssembly.instantiate(new Uint8Array(mathWasm))
    .then(res => res.instance.exports);

console.log("----------- Fixed values ----------- ");

console.log('return20()\t->', math.return20()); // 20

console.log("----------- Parameters ----------- ");

console.log('echo(10)\t->', math.echo(10)); // 10

console.log("----------- Calculations ----------- ");

console.log('square(5)\t->', math.square(5)); // 25
console.log('add(10, 5)\t->', math.add(10, 5)); // 15
console.log('multiply(10, 5)\t->', math.multiply(10, 5)); // 50