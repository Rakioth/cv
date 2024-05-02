import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

export default defineConfig({
	site: "https://cv.raks.dev",
	integrations: [tailwind()],
	compressHTML: true,
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
	},
	build: {
		inlineStylesheets: "always",
	},
	devToolbar: {
		enabled: false,
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
})
