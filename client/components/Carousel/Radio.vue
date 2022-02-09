<script lang="ts">
import * as vue from "vue";

export default vue.defineComponent({
	name: "CarouselRadio",
});
</script>

<script setup lang="ts">
type Props = {
	items: number;
	current: number;
};

const props = defineProps<Props>();

const emit = defineEmits<{
	(event: "clicked", value: number): void;
}>();

function onClick(e: any) {
	emit("clicked", e);
}
</script>

<template>
	<div class="carousel-radio">
		<div
			v-for="(item, i) of items"
			:key="i"
			@click="onClick(i)"
			:class="{ active: current === i }"
		/>
	</div>
</template>

<style lang="scss">
.carousel-radio {
	@include flex(row, center, center);
	gap: 1em;
	padding: 1em;

	> div {
		height: 15px;
		width: 15px;
		border-radius: 50%;
		border: 2px solid $primary-grey;
		background-color: $primary-grey;

		&.active {
			background-color: $primary;
		}
	}
}
</style>
