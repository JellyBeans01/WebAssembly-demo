# WASMModule

Here we will handwrite a WASM module so we can better understand what the compiler is doing to create that WASM code.

In reality, you will never really write a module in the way we did it here, You will almost always use another high-level language
such as C/C++/Rust/... .

## The coding

When handwriting WASM modules, you should use the `.wat` extension. This stands for WebAssembly Text and is a textual representation of the binairy file that will be produced later.

### First steps

`empty-module.wat` Contains the most basic structure you need for a module.
Now how do we get the browser to interpret this module?

Because as this is a textual representation of the module, and not bytecode, the browser will not be able to understand what is going on.

In order to do so, we need a toolkit called `wabt`. This toolkit has a tool called `wat2wasm` which we will need to compile our `.wat` module to `.wasm` bytecode.

The toolkit can be found [here](https://github.com/WebAssembly/wabt).

#### Installing wabt and wat2wasm

Let's setup `wabt` first

```shell
cd tools/wabt
mkdir dist
cd dist
```

On Linux/Mac, run

```shell
cmake ..
make
```

On Windows, run

```shell
cmake .. -DCMAKE_BUILD_TYPE=DEBUG -DCMAKE_INSTALL_PREFIX=..\ -G "Visual Studio 17 2022"
```

In order to find a list of a generator (argument passed after the `-G` flag) that suits your setup, run

```shell
cmake --help
```

After running the `cmake` command, run

```shell
cmake --build . --config DEBUG --target install
```

After this installation, you should be able to run wat2wasm from the `wabt/bin/` folder

#### Compiling our first module

Back in `WASMModule/src/modules`, run

Linux/Mac

```shell
../../../tools/wabt/bin/wat2wasm empty-module.wat -o dist/empty-module.wasm
```

Windows

```shell
..\..\..\tools\wabt\bin\wat2wasm empty-module.wat -o dist\empty-module.wasm
```

Now you should have your very first wasm module!

### Next steps

The module we made isn't very useful. So let's add some code in it that we can use later on!

We want to create a function that dquares a given number (for example).

What do we need to do in order to create and export this function?

1. Let's create a file called math.wat
2. Write the module syntax so the compiler knows we are creating a module
3. define your function
    -> `(func $square (param i32) (result i32))`
        - The `$` before the `square` word signifies what are funciton is called
        - We are passing in a number as a parameter: `(param i32)`
            - `i32` signifies a 32-bit integer value
            - WebAssembly is statically compiled, so we need to know what types our values are
        - We expect a result that is also a 32-bit integer value: `(result i32)`
4. define the body of you function, what it needs to do:
    -> `local.get 0`: we want to take the first parameter from our function's arguments and push it to the stack (= like how registers work in assembly)
        - We do this twice as we want to multiply the value with itself
    -> `i32.mul` will multiply the last two values on the stack and will put the result of those on the stack
        - The multiplication will remove the 2 multiplied values from the stack and will add the result of those on the stack
    -> We don't need to write a return as functions in WebAssembly will return the last item in the stack (in this case ourmultiplication result)
5. export our function
    -> `(export "square" (func $square))`
        - give the export a name (convention is the same name as we gave our function origininally, but in theory this can be anything)
        `(func $square)` is what will be exported as `"square"`

Now we run the `wat2wasm` command again and we are ready to use these files in a node env!

### Using with node

See index.js for documentaion

```shell
node index.js
```

### Using in the browser

See server.js for documentaion

```shell
node server.js
```
