<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "Layout",
});
</script>

<script setup lang="ts"></script>

<template>
	<div class="layout">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.layout {
	display: inherit;
}
</style>
