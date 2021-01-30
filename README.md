*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# Svelte Spectrum
![Paint](https://pbs.twimg.com/media/Es8_KtGVEAI1Oot?format=jpg&name=4096x4096)

![Preview](https://pbs.twimg.com/media/Es8_PWyVEAI1Tfo?format=jpg&name=4096x4096)

[Adobe Spectrum](https://github.com/adobe/coral-spectrum) design template for Svelte with TypeScript and SCSS.

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```sh
$ npm install
$ npm run icon
```

To make the Spectrum icon visible, you need to run `npm run icon`.  
It means `cp -r node_modules/@adobe/coral-spectrum/dist/resources public/`.

...then start [Rollup](https://rollupjs.org):

```sh
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```sh
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


### Makefile
You can use `make` command instead of `npm run`.

```sh
$ make
$ make dev
$ make icon
$ make start
```