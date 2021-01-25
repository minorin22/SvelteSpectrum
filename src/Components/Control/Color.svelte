<script lang="ts">

</script>

<div class="toolArea">
  <div class="toolAreaContainer">
    <coral-tablist size="S">
      <coral-tab icon="ColorWheel">Picker</coral-tab>
      <coral-tab icon="ColorPalette">Swatch</coral-tab>
    </coral-tablist>
  </div>
  <div class="toolAreaContainer" id="colorPicker">
    <div id="colorAreaContainer">
      <div id="colorArea"></div>
    </div>
    <div id="colorSlider"></div>
    <div id="alphaSlider">
      <div id="alphaSliderColor"></div>
    </div>
  </div>
  <div class="toolAreaContainer">
    <div class="selectColor">
      <div id="maincolor"></div>
      <div id="subcolor"></div>
    </div>
    <coral-select variant="quiet">
      <coral-select-item value="hex" selected="">Hex</coral-select-item>
      <coral-select-item value="rgb">RGB</coral-select-item>
      <coral-select-item value="hsv">HSV</coral-select-item>
    </coral-select>
    <input type="text" is="coral-textfield" variant="quiet" aria-label="text input" value="#FF0000">
    <input type="text" is="coral-textfield" variant="quiet" aria-label="text input" value="100%">
  </div>
</div>
<style lang="scss">

#colorAreaContainer {
  grid-column: 1 / 9;
  position: relative;
  &:before {
    content:"";
    display: block;
    padding-top: 100%;
  }
  #colorArea {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    background-color: #ff0000;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)),linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  }
}
#colorSlider {
  grid-column: 9 / 11;
  border-radius: 4px;
  background: linear-gradient(to bottom, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);
}
#alphaSlider {
  position: relative;
  z-index: 0;
  grid-column: 11 /13;
  border-radius: 4px;
  background: rgb(204, 204, 204);
  background-image:
    linear-gradient(45deg, rgb(255, 255, 255) 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, rgb(255, 255, 255) 0),
    linear-gradient(45deg, rgb(255, 255, 255) 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, rgb(255, 255, 255) 0);
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px, 8px 8px, 16px 16px;
  #alphaSliderColor {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-image: linear-gradient(to bottom, #ff0000 0%, rgba(0, 0, 0, 0) 100%);
  }
}
.selectColor {
  grid-column: 1 / 3;
  position: relative;
  div {
    width: 22px;
    height: 22px;
    border-radius: 2px;
  }
  #maincolor {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ff0000;
  }
  #subcolor {
    position: absolute;
    z-index: 0;
    top: 10px;
    left: 10px;
    background-color: #ffffff;
  }
}
coral-select {
  grid-column: 3 / 5;
  width: 100%;
}
input {
  &:nth-of-type(1) {
    grid-column: 6 / 10;
    width: 100%;
  }
  &:nth-of-type(2) {
    grid-column: 10 / 13;
    width: 100%;
  }
}
</style>