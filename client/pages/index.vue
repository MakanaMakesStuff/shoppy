<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "IndexPage",
});
</script>

<script setup lang="ts">
const items = [
	{
		src: "./assets/images/carousel-images/001.jpg",
		alt: "Young black woman shopping at the market",
		label: "Shopping on Autopilot",
	},
	{
		src: "./assets/images/carousel-images/002.jpg",
		alt: "Older black woman shopping at the market",
		label: "Create a Shopping List with One Click",
	},
	{
		src: "./assets/images/carousel-images/003.jpg",
		alt: "Black family going grocery shopping",
		label: "Get Started Today for Free!",
	},
];
</script>

<template>
	<page class="index-page">
		<CarouselBase :items="items" />
	</page>
</template>

<style lang="scss" scoped>
.index-page {
	@include flex(column, center, center);
}
</style>

<route>
meta:
  layout: default
</route>
