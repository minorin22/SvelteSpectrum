<script lang="ts">
import Header from "./Components/Header.svelte";
import LeftPanels from "./Components/LeftPanels.svelte";
import RightPanels from "./Components/RightPanels.svelte";
import Sidebar from "./Components/Sidebar.svelte";

</script>
<Header></Header>
<Sidebar></Sidebar>
<LeftPanels></LeftPanels>
<main class="spectrum-grid">
</main>
<RightPanels></RightPanels>

<style lang="scss" global>
@import "main.scss";
</style>