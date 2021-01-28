<script lang="ts">
import { AppMode } from './stores';
import Header from "./Components/Header.svelte";
import Preview from './Components/Preview.svelte';
//import LeftPanels from "./Components/LeftPanels.svelte";
import Panels from "./Components/Panels.svelte";
import Sidebar from "./Components/Sidebar.svelte";



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