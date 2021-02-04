<script lang="ts">
</script>

<div class="toolArea">
  <div class="toolNameArea">
    <coral-icon icon="Layers" size="XS"></coral-icon>
    <span class="toolName">Layers</span>
  </div>
  <div class="toolAreaContainer">
    <div class="BlendingModeContainer">
      <label for="BlendingMode" class="coral-FieldLabel">Blending Mode</label>
      <coral-select labelledby="BlendingMode">
        <coral-select-item value="normal" selected="">Normal</coral-select-item>
        <coral-select-item value="darken">Darken</coral-select-item>
        <coral-select-item value="multiply">Multiply</coral-select-item>
      </coral-select>
    </div>
    <form class="coral-Form coral-Form--vertical">
      <label for="Opacity" class="coral-FieldLabel">Opacity</label>
      <coral-numberinput labelledby="Opacity" value="100" max="100" min="0"></coral-numberinput>
    </form>
  </div>
  <div class="toolAreaContainer lockContainer">
    <label for="Lock" class="coral-FieldLabel">Lock: </label>
    <coral-buttongroup selectionmode="multiple" labelledby="Lock">
      <button is="coral-button" icon="Transparency" variant="quiet"></button>
      <button is="coral-button" icon="Brush" variant="quiet"></button>
      <button is="coral-button" icon="Move" variant="quiet"></button>
      <button is="coral-button" icon="LockClosed" variant="quiet"></button>
    </coral-buttongroup>
  </div>
  <coral-tree class="layerList">
    <coral-tree-item>
      <coral-tree-item-content>
        <div class="layerThumbnail"></div>
        <div class="layerName">Group 1</div>
        <div class="layerIcons">
          <coral-icon icon="LockClosed"></coral-icon>
          <coral-icon icon="Visibility"></coral-icon></div>
      </coral-tree-item-content>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>
          <div class="layerThumbnail"></div>
          <div class="layerName">Layer 4</div>
          <div class="layerIcons">
            <coral-icon icon="LockClosed"></coral-icon>
            <coral-icon icon="Visibility"></coral-icon>
          </div></coral-tree-item-content>
    </coral-tree-item>
      <coral-tree-item>
        <coral-tree-item-content>
          <div class="layerThumbnail"></div>
          <div class="layerName">Sub Group 1</div>
          <div class="layerIcons">
            <coral-icon icon="LockClosed"></coral-icon>
            <coral-icon icon="Visibility"></coral-icon>
          </div>
        </coral-tree-item-content>
        <coral-tree-item variant="leaf">
          <coral-tree-item-content>
            <div class="layerThumbnail"></div>
            <div class="layerName">Layer 3</div>
            <div class="layerIcons">
              <coral-icon icon="LockClosed"></coral-icon>
              <coral-icon icon="Visibility"></coral-icon>
            </div>
          </coral-tree-item-content>
        </coral-tree-item>
      </coral-tree-item>
    </coral-tree-item>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>
          <div class="layerThumbnail"></div>
          <div class="layerName">Layer 2</div>
          <div class="layerIcons">
            <coral-icon icon="LockClosed"></coral-icon>
            <coral-icon icon="Visibility"></coral-icon>
          </div>
        </coral-tree-item-content>
      </coral-tree-item>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>
          <div class="layerThumbnail"></div>
          <div class="layerName">Layer 1</div>
          <div class="layerIcons">
            <coral-icon icon="LockClosed"></coral-icon>
            <coral-icon icon="Visibility"></coral-icon>
          </div>
        </coral-tree-item-content>
      </coral-tree-item>
  </coral-tree>
  <div class="toolAreaContainer lockContainer">
    <label for="Actions" class="coral-FieldLabel">Actions: </label>
    <coral-buttongroup selectionmode="multiple" id="Actions">
      <button is="coral-button" icon="Effects" variant="quiet"></button>
      <button is="coral-button" icon="Folder" variant="quiet"></button>
      <button is="coral-button" icon="Add" variant="quiet"></button>
      <button is="coral-button" icon="Delete" variant="quiet"></button>
    </coral-buttongroup>
  </div>
</div>

<style lang="scss">
.BlendingModeContainer {
  grid-column: 1 / 8;
  width: 100%;
}
form {
  grid-column: 8 / 13;
  width: 100%;
  coral-numberinput {
    width: 100%;
  }
}
.lockContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    margin-right: auto;
  }
  coral-buttongroup {
    margin-right: 20%;
  }
}
.layerList {
  margin: 8px;
  coral-tree-item-content {
    display: flex;
    align-items: center;
    width: 100%;
    .layerThumbnail {
        width: 32px;
        height: 24px;
        border-radius: 2px;
        overflow: visible;
        margin-right: 8px;
        background: rgb(204, 204, 204);
        background-image:
          linear-gradient(45deg, rgb(255, 255, 255) 25%, transparent 0),
          linear-gradient(45deg, transparent 75%, rgb(255, 255, 255) 0),
          linear-gradient(45deg, rgb(255, 255, 255) 25%, transparent 0),
          linear-gradient(45deg, transparent 75%, rgb(255, 255, 255) 0);
        background-size: 16px 16px;
        background-position: 0 0, 8px 8px, 8px 8px, 16px 16px;
      }
    .layerName {
      width: auto;
      overflow: hidden;
    }
    .layerIcons {
       margin-left: auto;
    }
  }
}
</style>