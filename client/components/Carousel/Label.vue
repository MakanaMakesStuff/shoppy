<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "CarouselLabel",
});
</script>

<script setup lang="ts">
type Props = {
	label?: string;
};
const props = defineProps<Props>();
</script>

<template>
	<div class="carousel-label">
		<h1>{{ label }}</h1>
	</div>
</template>

<style lang="scss">
.carousel-label {
	display: inherit;
	color: white;
	text-shadow: 5px 5px 5px $primary-grey;
}
</style>
