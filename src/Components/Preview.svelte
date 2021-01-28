<script lang="ts">

</script>

<div class="preview">
  <div class="previewWindowArea">
    <div id="previewWindowContainer">
      <div id="previewWindow"></div>
    </div>
    <div id="playbackTools">
      <div class="time timeLeft">00:00:00</div>
      <coral-buttongroup>
        <button is="coral-button" icon="Rewind" variant="quietaction"></button>
        <button is="coral-button" icon="StepBackward" variant="quietaction"></button>
        <button is="coral-button" icon="Play" variant="quietaction"></button>
        <button is="coral-button" icon="StepForward" variant="quietaction"></button>
        <button is="coral-button" icon="FastForward" variant="quietaction"></button>
      </coral-buttongroup>
      <div class="time timeRight">00:00:00</div>
    </div>
  </div>
  <div class="timeline"></div>
</div>

<style lang="scss">
.preview {
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;
  .previewWindowArea {
    width: 76%;
    margin: 48px auto auto auto;
    grid-row: 1;
    grid-template-rows: auto 48px;
    #previewWindowContainer {
        grid-row: 1;
        position: relative;
        &:before {
          content:"";
          display: block;
          padding-top: (9 / 16) * 100%;
        }
        #previewWindow {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: #000000;
        }
    }
    #playbackTools {
      grid-row: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      .timeLeft {
        margin-right: auto;
      }
      .timeRight {
        margin-left: auto;
      }
    }
  }
  .timeline {
    grid-row: 2;
  }
}
</style>