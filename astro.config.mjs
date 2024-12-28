// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: 'https://smirk.dev',
    integrations: [icon({
        include: {
            'tabler': ['*'], // Include all Tabler icons }, }), ],
        }}), sitemap(), tailwind()]
});