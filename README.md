# WebAssembly-demo
A brief PoC about WebAssembly

TODOs
- [ ] Demo in React

- [ ] C++ to WASM
- [ ] Tests WASM Module
- [ ] Use C++ module in JS

- https://hub.packtpub.com/testing-webassembly-modules-with-jest-tutorial/
- https://www.youtube.com/watch?v=LsbEGkucCaM

## WASMTEST

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

Then, to run tests, make sure you have the source file built

```shell
npm run build
```

Now you can run the test file

```shell
npm run test
```
