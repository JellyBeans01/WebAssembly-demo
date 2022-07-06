# WebAssembly-demo
A brief PoC about WebAssembly

TODOs
- [ ] Demo in React

- [x] WAT to WASM
- [x] C++ to WASM
- [x] Tests WASM Module
- [x] Use C++ module in JS

Make sure the emcc binairy is built and loaded into your PATH vars by running

Linux/MacOS

```shell
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

Windows

```shell
emsdk install latest
emsdk activate latest
```

Order of projects (documentation included in each subfolder)
1. [WASMTest](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/WASMTest)
2. [WASMModule](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/WASMModule)
3. [StackMachine](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/StackMachine)
4. [WASMTables](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/WASMTables)
5. [AssemblyScript](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/AssemblyScript)
6. [WASMReact](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/WASMReact)
