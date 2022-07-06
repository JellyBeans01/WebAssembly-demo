# WASMReact

Now let's test how well React and WASM work together by making a sort of gif-maker.

Let's init a project using CRA and add the ffmpeg package. Again, I'm using `pnpm`, but you can use the package manager of your choice.

```shell
pnpm add @ffmpeg/ffmpeg @ffmpeg/core
```

A couple things to note:
 - we're downgrading from the actual 0.10.x version of @ffmpeg/* because something's messed up on their side of things
 - We're also including another script in the public/index.html file to make sure that the download of the wasm file happens correctly. This had something to do with SharedArrayBuffer and some headers that needed to be set when downloading stuff

Start the development server by running

```shell
yarn start
```

Open up App.tsx for more info
