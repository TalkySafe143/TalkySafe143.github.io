// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    output: "static",
    outDir: "dist",
    site: "https://talkysafe143.github.io",
    base: "/",
    trailingSlash: "always",
    integrations: [
        react({
            experimentalReactChildren: true,
        }),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
