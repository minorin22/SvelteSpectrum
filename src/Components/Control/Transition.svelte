<script lang="ts">
</script>

<div class="toolArea">
  <div class="toolNameArea">
    <coral-icon icon="ImageAlbum" size="XS"></coral-icon>
    <span class="toolName">Transition</span>
  </div>
  <div class="transitionContainer">
    <label for="fadeIn" class="coral-FieldLabel coral-FieldLabel--left">Fade In</label>
    <coral-select id="fadeIn">
      <coral-select-item value="none">None</coral-select-item>
      <coral-select-item value="whiteIn">White In</coral-select-item>
      <coral-select-item value="blackIn">Black In</coral-select-item>
    </coral-select>
  </div>
  <div class="transitionContainer">
    <label for="fadeInDuration" class="coral-FieldLabel coral-FieldLabel--left">Duration</label>
    <coral-slider id="fadeInDuration"></coral-slider>
    <input type="text" is="coral-textfield" variant="quiet">
  </div>
  <div class="transitionContainer">
    <label for="fadeIn" class="coral-FieldLabel coral-FieldLabel--left">Fade Out</label>
    <coral-select id="fadeOut">
      <coral-select-item value="none">None</coral-select-item>
      <coral-select-item value="whiteOut">White Out</coral-select-item>
      <coral-select-item value="blackOut">Black Out</coral-select-item>
    </coral-select>
  </div>
  <div class="transitionContainer">
    <label for="fadeOutDuration" class="coral-FieldLabel coral-FieldLabel--left">Duration</label>
    <coral-slider id="fadeOutDuration"></coral-slider>
    <input type="text" is="coral-textfield" variant="quiet">
  </div>
</div>

<style lang="scss">
.transitionContainer {
  margin: 8px 16px;
  label {
    width: 30%;
    margin-left: 8px;
  }
  coral-select {
    width: 62%;
    margin-right: 8px;
  }
  coral-slider {
    width: 40%;
    display: inline-block!important;
    margin-right: 8px;
  }
  input {
    width: 16%;
    margin-right: 8px;
  }
}
</style>