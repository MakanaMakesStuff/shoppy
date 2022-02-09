<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "NavigationBurger",
});
</script>

<script setup lang="ts">
const store = vue.inject("store");
</script>

<template>
	<div class="navigation-burger" @click="store.methods.toggleOpen()">
		<i class="fas fa-bars"></i>
	</div>
</template>

<style lang="scss" scoped>
.navigation-burger {
	display: inherit;
	flex: 1;
}
</style>
