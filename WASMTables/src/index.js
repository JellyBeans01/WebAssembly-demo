import fs from 'fs';

const tablesWasm = fs.readFileSync('../dist/tables.wasm');
const tables = await WebAssembly.instantiate(new Uint8Array(tablesWasm))
    .then(res => res.instance.exports);

console.log(tables.call_by_index(0)) // 1
console.log(tables.call_by_index(1)) // 2