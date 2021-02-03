<script lang="ts">
import { onMount } from 'svelte';
import { AppMode } from './stores';
import Header from "./Components/Header.svelte";
import Preview from './Components/Preview.svelte';
import Panels from "./Components/Panels.svelte";
import Sidebar from "./Components/Sidebar.svelte";

onMount(()=>{
  document.querySelector('body').classList.add('coral--light');
});

</script>
<Header></Header>
<Sidebar></Sidebar>

<main>
  {#if $AppMode == 'preview'}
    <Preview></Preview>
  {/if}
</main>
<Panels></Panels>

<style lang="scss" global>
@import "main.scss";
</style>