# WASMDebug

Here we will test out the WebAssembly debug extension which can be found [here](https://chrome.google.com/webstore/detail/cc%20%20-devtools-support-dwa/pdcpmagijalfljmkmjngeonclgbbannb)

We start of with a pretty simple C example.
Let's use emcc again to compile it to an HTML template

```shell
emcc -g main.c -o ../dist/main.html
```

Note the `-g` flag, this let's the com,piler know to include debug information

Now, let's serve out HTML file using `serve`

If you do not have serve installed, run

```shell
yarn global add serve
```

or using npm

```shell
npm i -g serve
```

Navigate to the dist folder and run

```shell
serve
```

We'll need to use [chrome canary](https://www.google.com/chrome/canary/) to debug with the extension. You also want to enable WebAssembly debugging in the DevTools Experiments.

![image](https://user-images.githubusercontent.com/42315197/177548559-dd22d475-739c-4fb2-a918-fa3020c05482.png)

When you enabled that checkbox, close Settings and reload DevTools as it will suggest, to apply the changes.

Surf to the url where your built assets are served and click on the main.html file to open up the HTML.

In your DevTools, enable the `Pause on caught exceptions` option in the Srouce tab and reload the page. You should now see the DevTools paused on an exception.

![image](https://user-images.githubusercontent.com/42315197/177549535-6865bfa5-4bf8-40d9-ade7-be5db4175246.png)

In the call stack, we can click on the location that invoked the exception and we can play around with the Debugger a bit.
