import App from './App.svelte';
import "@adobe/coral-spectrum/dist/js/coral.js";
import "@adobe/coral-spectrum/dist/css/coral.css";
const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;