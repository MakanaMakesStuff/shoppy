<script lang="ts">
import * as vue from "vue";
export default vue.defineComponent({
	name: "NavigationMenu",
});
</script>

<script setup lang="ts">
const store = vue.inject("store");
</script>

<template>
	<div class="navigation-menu" :class="{ opened: store.getters.fetchState() }">
		<ul>
			<a href="/"><li>Home</li></a>
			<a href="about"><li>About</li></a>
			<a href="create-list"><li>Create List</li></a>
		</ul>
	</div>
</template>

<style lang="scss">
.navigation-menu {
	overflow: hidden;
	z-index: 1000;
	background-color: white;
	height: 0px;
	top: 100%;
	transition: height ease 0.25s;
	width: 100%;
	position: absolute;
	transition: all ease 0.25s;

	&.opened {
		height: 217px;
	}
	ul {
		list-style: none;

		a {
			text-decoration: none;
			color: $primary;

			li {
				margin: 1em;
				padding: 1em;
			}
		}
	}
}
</style>
