<script lang="ts">
import Color from "./Control/Color.svelte";
import Layers from "./Control/Layers.svelte";
import Transform from "./Control/Transform.svelte";

import { AppMode } from '../stores';


</script>

<div class="panels right-panels">
  {#if $AppMode == 'paint'}
    <Color></Color>
    <Transform></Transform>
    <Layers></Layers>
  {:else if $AppMode == 'edit'}
  {:else if $AppMode == 'preview'}
  {/if}
</div>

<style lang="scss">

</style>