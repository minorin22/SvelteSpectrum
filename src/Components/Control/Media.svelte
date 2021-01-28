<script lang="ts">
</script>

<div class="toolArea">
  <div class="toolNameArea">
    <coral-icon icon="Asset" size="XS"></coral-icon>
    <span class="toolName">Media</span>
  </div>
  <div class="mediaContainer">
    <coral-card>
      <coral-card-asset>
        <coral-icon icon="Asset"></coral-icon>
      </coral-card-asset>
      <coral-card-content>
        <coral-card-title>Title.mp4</coral-card-title>
      </coral-card-content>
    </coral-card>
    <coral-card>
      <coral-card-asset>
        <coral-icon icon="Asset"></coral-icon>
      </coral-card-asset>
      <coral-card-content>
        <coral-card-title>Credit.mp4</coral-card-title>
      </coral-card-content>
    </coral-card>
    <coral-card>
      <coral-card-asset>
        <coral-icon icon="Audio"></coral-icon>
      </coral-card-asset>
      <coral-card-content>
        <coral-card-title>BGM1.wav</coral-card-title>
      </coral-card-content>
    </coral-card>
    <coral-card>
      <coral-card-asset>
        <coral-icon icon="Audio"></coral-icon>
      </coral-card-asset>
      <coral-card-content>
        <coral-card-title>BGM2.wav</coral-card-title>
      </coral-card-content>
    </coral-card>
    <coral-card>
      <coral-card-asset>
        <coral-icon icon="Audio"></coral-icon>
      </coral-card-asset>
      <coral-card-content>
        <coral-card-title>Dialogue1.wav</coral-card-title>
      </coral-card-content>
    </coral-card>
  </div>

</div>

<style lang="scss" global>
.mediaContainer {
  margin: 8px 16px;
  display: grid;
  grid-auto-rows: 128px;
  grid-template-columns: repeat(2, 128px);
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  ._coral-Card {
    width: 100%!important;
    min-width: fit-content!important;
    min-height: fit-content!important;
    cursor: pointer;
    coral-card-asset {
      min-height: 65px!important;
    }
  }
}
</style>