<script lang="ts">
import { AppMode } from '../stores';
</script>

<div class="sidebar">
  <nav is="coral-sidenav">
    <a is="coral-sidenav-item" href="#" icon="Select" selected=""></a>
    {#if $AppMode == 'paint'}
      <a is="coral-sidenav-item" href="#" icon="RegionSelect"></a>
      <a is="coral-sidenav-item" href="#" icon="Brush"></a>
      <a is="coral-sidenav-item" href="#" icon="VectorDraw"></a>
      <a is="coral-sidenav-item" href="#" icon="Erase"></a>
      <a is="coral-sidenav-item" href="#" icon="Sampler"></a>
      <a is="coral-sidenav-item" href="#" icon="ColorFill"></a>
      <a is="coral-sidenav-item" href="#" icon="Gradient"></a>
      <a is="coral-sidenav-item" href="#" icon="Crop"></a>
      <a is="coral-sidenav-item" href="#" icon="Text"></a>
    {:else if $AppMode == 'preview'}
      <a is="coral-sidenav-item" href="#" icon="VoiceOver"></a>
    {/if}
  </nav>
</div>

<style lang="scss" global>
._coral-SideNav {
  width: 32px;
  margin: auto!important;
  a {
    height: 32px;
    margin: 8px auto 0 auto;
    ._coral-SideNav-itemLink {
      padding: 5px 8px;
    }
    ._coral-SideNav-itemLink ._coral-SideNav-itemIcon {
      margin: auto;
    }
  }
}
</style>