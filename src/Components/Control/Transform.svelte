<script lang="ts">
</script>

<div class="toolArea">
  <div class="toolNameArea">
    <coral-icon icon="ImageMapRectangle" size="XS"></coral-icon>
    <span class="toolName">Transform</span>
  </div>
  <div class="transformContainer">
    <label for="Winput" class="coral-FieldLabel coral-FieldLabel--left">W</label>
    <input type="text" is="coral-textfield" id="Winput" variant="quiet">
    <label for="Xinput" class="coral-FieldLabel coral-FieldLabel--left">X</label>
    <input type="text" is="coral-textfield" id="Xinput" variant="quiet">
    <label for="Rinput" class="coral-FieldLabel coral-FieldLabel--left">
      <coral-icon icon="RotateCW" size="XS"></coral-icon>
    </label>
    <input type="text" is="coral-textfield" id="Rinput" variant="quiet">
  </div>
  <div class="transformContainer">
    <label for="Hinput" class="coral-FieldLabel coral-FieldLabel--left">H</label>
    <input type="text" is="coral-textfield" id="Hinput" variant="quiet">
    <label for="Yinput" class="coral-FieldLabel coral-FieldLabel--left">Y</label>
    <input type="text" is="coral-textfield" id="Yinput" variant="quiet">
  </div>
  <div class="transformContainer">
    <coral-buttongroup>
      <button is="coral-button" icon="FlipHorizontal" variant="quiet"></button>
      <button is="coral-button" icon="FlipVertical" variant="quiet"></button>
    </coral-buttongroup>
  </div>

</div>

<style lang="scss">
.transformContainer {
  margin: 8px 16px;
  label {
    width: 6%;
    margin-left: 8px;
  }
  input {
    width: 20%;
  }
}
</style>