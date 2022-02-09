import { reactive } from "vue";

const state = reactive({
	opened: false,
});

const getters = {
	fetchState() {
		return state.opened;
	},
};

const methods = {
	toggleOpen() {
		state.opened = !state.opened;
	},
};

export default {
	state,
	getters,
	methods,
};
