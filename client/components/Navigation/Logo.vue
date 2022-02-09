<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "NavigationLogo",
});
</script>

<script setup lang="ts"></script>

<template>
	<div class="navigation-logo">
		<i class="fas fa-carrot"></i>
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.navigation-logo {
	@include flex(row, flex-start, center);
	gap: 1em;
	flex: 1;
}
</style>
