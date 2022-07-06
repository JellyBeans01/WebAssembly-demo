# AssemblyScript

## What is AssemblyScript

It is a programming language which is essentialy TypeScript. But unlike TS which transpiles to JavaScript, AssemblyScript compiles into Web Assembly Modules.

There are some differences in syntax, which sounds logic, but largely they are the same thing.

Therefore, if you want to get into WASM and do  not want to handcode your modules, AssemblyScript is a great way of sticking with your core JS/TS knowledge and being able to create WA modules!

## Getting started

Download and install the `@assemblyscript/loader` dependency and the `assemblyscript` devDependency.

I'm using pnpm as a package manager, but you can use your favorite one.

```shell
pnpm add @assemblyscript/loader
pnpm add assemblyscript -D
```

After your packages have been installed we want to init our AssemblyScript project

```shell
npx asinit .
```

This will generate a bunch of files.
- a starter html file that loads a prewritten, precompiled WA module
- a test file for that module
- a folder with an index.ts and tsconfig.json file

This index.ts file is the main entrypoint for your AS code.

After you are done writing your code, you can run

```shell
npm run asbuild
```

This will make a debug and optimized release build

Then you can run

```shell
npm run test
```

which will run the "test file"
