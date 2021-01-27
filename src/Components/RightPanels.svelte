<script lang="ts">
import { AppMode } from '../stores';
import Color from "./Control/Color.svelte";
import Layers from "./Control/Layers.svelte";
import Transform from "./Control/Transform.svelte";
import Outline from "./Control/Outline.svelte";
import Transition from "./Control/Transition.svelte";
import CameraWork from './Control/CameraWork.svelte';

</script>

<div class="panels right-panels">
  {#if $AppMode == 'paint'}
    <Color></Color>
    <Transform></Transform>
    <Layers></Layers>
  {:else if $AppMode == 'edit' || 'preview'}
    <Transition></Transition>
    <CameraWork></CameraWork>
    <Outline></Outline>
  {/if}
</div>

<style lang="scss">

</style>