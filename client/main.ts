import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import Vue3Transitions from "vue3-transitions";

const app = createApp(App);

const head = createHead();

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
	history: createWebHistory(),
	routes,
});

app.use(router);

app.use(head);

app.use(Vue3Transitions);

app.mount("#app");
