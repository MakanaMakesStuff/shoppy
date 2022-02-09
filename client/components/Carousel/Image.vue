<script lang="ts">
import * as vue from "vue";
import { customRef } from "vue";
export default vue.defineComponent({
	name: "CarouselImage",
});
</script>

<script setup lang="ts">
type Props = {
	item?: any;
	current?: any;
	index?: number;
};

const status = vue.computed(() => props.current);

const props = defineProps<Props>();
</script>
``
<template>
	<FadeInOut entry="left" exit="right" :duration="500" mode="out-in">
		<div class="carousel-image" v-if="index === status.curr">
			<CarouselLabel :label="item.label" />
			<img v-if="item" :src="item.src" :alt="item.alt" />
		</div>
	</FadeInOut>
</template>

<style lang="scss">
.fade-enter-from {
	opacity: 0;
}

.fade-enter-to {
	opacity: 1;
}

.fade-enter-active {
	transition: opacity ease 0.25s;
}

.carousel-image {
	width: 100%;
	height: 100%;
	@include flex(column, center, center);

	.carousel-label:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: $overlay;
		z-index: -1;
	}

	img {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		position: absolute;
		z-index: -2;
	}
}
</style>
