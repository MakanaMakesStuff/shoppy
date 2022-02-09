<script lang="ts">
import { useHead } from "@vueuse/head";
import * as vue from "vue";
import store from "./includes/stores/burger";

export default vue.defineComponent({
	name: "App",
	inheritAttrs: false,
});
</script>

<script setup lang="ts">
vue.provide("store", store);

useHead({
	link: [
		{
			rel: "prefetch",
			as: "style",
			href: "/assets/fontawesome/css/all.min.css",
		},
		{
			rel: "stylesheet",
			href: "/assets/fontawesome/css/all.min.css",
		},
	],
});
</script>

<template>
	<router-view />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
