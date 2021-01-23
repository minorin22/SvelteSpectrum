<script lang="ts">

</script>

<header>
  <div class="left-items">
  <button is="coral-button" variant="quietaction" icon="Home" title="Home"></button>
  <coral-tablist size="L">
    <coral-tab icon="Brush">Paint</coral-tab>
    <coral-tab icon="TableEdit">Edit</coral-tab>
    <coral-tab icon="Play">Preview</coral-tab>
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
  coral-select {
    width: auto;
  }
}
</style>