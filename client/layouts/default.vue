<script lang="ts">
import { useHead } from "@vueuse/head";
import * as vue from "vue";

export default vue.defineComponent({
	name: "DefaultLayout",
	inheritAttrs: false,
});
</script>

<script setup lang="ts">
//Don't need usehead for sassy import if vite.config.ts has preprossepr options set to import sassy
useHead({
	link: [
		{
			rel: "prefetch",
			as: "style",
			href: "./assets/styles/client.scss",
		},
		{
			rel: "stylesheet",
			href: "./assets/styles/client.scss",
		},
	],
});
</script>

<template>
	<layout class="default-layout">
		<NavigationContainer />
		<RouterView class="layout-content" />
	</layout>
</template>

<style lang="scss" scoped>
.default-layout {
	display: inherit;
}
</style>
