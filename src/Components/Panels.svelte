<script lang="ts">
import { AppMode } from '../stores';
import Color from "./Control/Color.svelte";
import Layers from "./Control/Layers.svelte";
import Transform from "./Control/Transform.svelte";
import Outline from "./Control/Outline.svelte";
import Transition from "./Control/Transition.svelte";
import CameraWork from './Control/CameraWork.svelte';
import Dialogue from './Control/Dialogue.svelte';
import Media from './Control/Media.svelte';
</script>

<div class="panels">
  {#if $AppMode == 'paint'}
    <Color></Color>
    <Transform></Transform>
    <Layers></Layers>
  {:else if $AppMode == 'edit'}
    <Transition></Transition>
    <CameraWork></CameraWork>
    <Outline></Outline>
  {:else}
    <Dialogue></Dialogue>
    <Media></Media>
  {/if}
</div>

<style lang="scss">

</style>