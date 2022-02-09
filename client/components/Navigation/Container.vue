<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "NavigationContainer",
});
</script>

<script setup lang="ts"></script>

<template>
	<div class="navigation-container">
		<NavigationLogo>
			<span>Shoppy</span>
		</NavigationLogo>
		<NavigationBurger />
		<NavigationMenu />
	</div>
</template>

<style lang="scss" scoped>
.navigation-container {
	padding: 1em;
	width: 100%;
	background-color: orange;
	color: white;
	position: relative;
	@include flex(row, center, center);

	.navigation-burger {
		justify-content: end;
	}
}
</style>
