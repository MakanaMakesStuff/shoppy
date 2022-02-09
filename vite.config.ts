import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: "CLIENT",
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: "@import 'global';",
				includePaths: ["assets/styles"],
			},
		},
	},

	plugins: [
		vue(),
		Components({
			dts: true,
			dirs: ["client/components"],
			directoryAsNamespace: true,
		}),
		Pages({
			dirs: "client/pages",
			routeBlockLang: "yaml",
		}),
		Layouts({
			layoutsDir: "client/layouts",
		}),
	],
});
