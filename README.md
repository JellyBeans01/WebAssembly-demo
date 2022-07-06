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
2. [WASMDebug](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/WASMDebug)
3. [WASMModule](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/WASMModule)
4. [StackMachine](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/StackMachine)
5. [WASMTables](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/WASMTables)
6. [AssemblyScript](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/AssemblyScript)
7. [WASMReact](https://github.com/JellyBeans01/WebAssembly-demo/tree/develop/WASMReact)
