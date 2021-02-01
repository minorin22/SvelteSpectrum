<script lang="ts">
import { AppMode } from '../stores';
import { onMount } from 'svelte';
const Modes: { [key: string]: string; }[] = [
  {name: 'Paint', icon:'Brush'},
  {name: 'Edit', icon:'TableEdit'},
  {name: 'Preview', icon:'VideoFilled'}
];

function setMode() {
  $AppMode = this.id;
}

onMount(()=>{
  document.getElementById($AppMode).setAttribute('selected', '"');
});


</script>

<header>
  <div class="left-items">
  <button is="coral-button" variant="quietaction" icon="Home" title="Home"></button>
  <coral-tablist size="L">
  {#each Modes as Mode}
    <coral-tab icon={Mode.icon} id={Mode.name.toLowerCase()} on:click={setMode}>
      <coral-tab-label class="_coral-Tabs-itemLabel">{Mode.name}</coral-tab-label>
    </coral-tab>
  {/each}
  </coral-tablist>
  </div>

  <coral-select variant="quiet">
    <coral-select-item>
      <coral-icon alt="" icon="DocumentOutline" selected=""></coral-icon>
      Mizutama.psd
    </coral-select-item>
    <coral-select-item>
      <coral-icon alt="" icon="DocumentOutline"></coral-icon>
      Minorin.psd
    </coral-select-item>
  </coral-select>

  <coral-buttongroup class="right-items">
    <button is="coral-button" icon="Share" title="Share" variant="quietaction"></button>
    <button is="coral-button" icon="Branch2" title="Branch2" variant="quietaction"></button>
    <button is="coral-button" icon="Settings" title="Settings"  variant="quietaction"></button>
  </coral-buttongroup>
</header>

<style lang="scss">
header {
  display: flex;
  justify-content: center;
  align-items: center;
  .left-items {
    display: flex;
    align-items: center;
    margin-left: 8px;
    margin-right: auto;
  }
  .right-items {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 8px;
  }
}
</style>