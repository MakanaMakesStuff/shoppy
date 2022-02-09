<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "CarouselBase",
});
</script>

<script setup lang="ts">
type Props = {
	items: any;
};

const props = defineProps<Props>();

const items = vue.computed(() => props.items);

const state = vue.reactive({
	clicked: false,
	curr: 0,
});

function setActive(e: any) {
	state.clicked = true;
	state.curr = e;
}

setInterval(function () {
	if (state.curr < props.items.length - 1) {
		state.curr++;
		state.clicked = false;
	} else state.curr = 0;
}, 5000);
</script>

<template>
	<div class="carousel-base">
		<div class="carousel-items">
			<div v-for="(obj, i) of items" :key="i" class="item">
				<CarouselImage :current="state" :item="obj" :index="i" />
			</div>
			<CarouselRadio
				:current="state.curr"
				:items="items.length"
				@clicked="setActive($event)"
			/>
		</div>
	</div>
</template>

<style lang="scss">
.carousel-base {
	position: relative;
	width: 100%;
	height: auto;
	min-height: 700px;
	@include flex(column, center, center);
	overflow: hidden;

	.carousel-items {
		width: 100%;

		.item {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			z-index: 1;
		}

		.carousel-radio {
			position: absolute;
			z-index: 100;
			margin: auto;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
}
</style>
