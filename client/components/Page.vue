<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "Page",
});
</script>

<script setup lang="ts"></script>

<template>
	<div class="page">
		<slot />
	</div>
</template>

<style lang="scss">
.page {
	display: inherit;
}
</style>
