<script lang="ts">
</script>

<div class="toolArea">
  <div class="toolNameArea">
    <coral-icon icon="ViewList" size="XS"></coral-icon>
    <span class="toolName">Outline</span>
  </div>
  <coral-tree class="outline">
    <coral-tree-item expanded="">
      <coral-tree-item-content>Scene 001</coral-tree-item-content>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>Cut 001</coral-tree-item-content>
      </coral-tree-item>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>Cut 002</coral-tree-item-content>
      </coral-tree-item>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>Cut 003</coral-tree-item-content>
      </coral-tree-item>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>Cut 004</coral-tree-item-content>
      </coral-tree-item>
    </coral-tree-item>
    <coral-tree-item>
      <coral-tree-item-content>Scene 002</coral-tree-item-content>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>Cut 005</coral-tree-item-content>
      </coral-tree-item>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>Cut 006</coral-tree-item-content>
      </coral-tree-item>
      <coral-tree-item variant="leaf">
        <coral-tree-item-content>Cut 007</coral-tree-item-content>
      </coral-tree-item>
    </coral-tree-item>
  </coral-tree>
</div>

<style lang="scss">
.toolArea {
  //max-height: 328px;
  overflow: auto;
}
.outline {
  margin: 8px;
  coral-tree-item-content {
    width: 100%;
  }
}
</style>