<script lang="ts">
</script>

<div class="toolArea">
  <div class="toolNameArea">
    <coral-icon icon="MovieCamera" size="XS"></coral-icon>
    <span class="toolName">Camera Wrok</span>
  </div>
  <div class="cameraWorkContainer">
    <label for="inputContainer" class="coral-FieldLabel coral-FieldLabel--left">POSITION</label>
    <div class="inputContainer">
      <label for="inX" class="coral-FieldLabel coral-FieldLabel--left">IN</label>
      <label for="inX" class="coral-FieldLabel coral-FieldLabel--left">X</label>
      <input type="text" is="coral-textfield" id="inX" variant="quiet">
      <label for="inY" class="coral-FieldLabel coral-FieldLabel--left">Y</label>
      <input type="text" is="coral-textfield" id="inY" variant="quiet">
    </div>
  </div>
  <div class="cameraWorkContainer">
    <div class="inputContainer">
      <label for="outX" class="coral-FieldLabel coral-FieldLabel--left">OUT</label>
      <label for="outX" class="coral-FieldLabel coral-FieldLabel--left">X</label>
      <input type="text" is="coral-textfield" id="outX" variant="quiet">
      <label for="outY" class="coral-FieldLabel coral-FieldLabel--left">Y</label>
      <input type="text" is="coral-textfield" id="outY" variant="quiet">
    </div>
  </div>
  <div class="cameraWorkContainer">
    <div class="inputContainer">
      <label for="sizeIn" class="coral-FieldLabel coral-FieldLabel--left">SCALE</label>
      <label for="sizeIn" class="coral-FieldLabel coral-FieldLabel--left">IN</label>
      <input type="text" is="coral-textfield" id="sizeIn" variant="quiet">
      <label for="sizeOut" class="coral-FieldLabel coral-FieldLabel--left">OUT</label>
      <input type="text" is="coral-textfield" id="sizeOut" variant="quiet">
    </div>
  </div>
</div>

<style lang="scss">
.cameraWorkContainer {
  margin: 8px 16px;
  label {
    margin-left: 8px;
    margin-bottom: 16px;
  }
  .inputContainer {
    label {
      width: 10%;
      margin-left: 8px;
    }
    input {
      width: 26%;
  }
  }
}
</style>