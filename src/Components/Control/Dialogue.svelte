<script lang="ts">
</script>

<div class="toolArea">
  <div class="toolNameArea">
    <coral-icon icon="Comment" size="XS"></coral-icon>
    <span class="toolName">Dialogue</span>
  </div>
  <div class="dialogueContainer">
    <label for="Character" class="coral-FieldLabel">Character</label>
    <coral-select id="Character">
      <coral-select-item value="Minorin">Minorin</coral-select-item>
      <coral-select-item value="En">En</coral-select-item>
    </coral-select>
    <textarea is="coral-textarea" aria-label="text input"></textarea>
  </div>

</div>

<style lang="scss">
.dialogueContainer {
  margin: 8px 16px;
  coral-select, textarea {
    width: 100%;
    margin-bottom: 8px;
  }
  textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 120px;
  }
}
</style>