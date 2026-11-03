// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import satteriCallouts from 'satteri-callouts';

// https://astro.build/config
export default defineConfig({
    site: "https://chungkw.github.io",
    base: "/",
    fonts: [
        {
            name: "Inter",
            cssVariable: "--font-inter",
            weights: ["300 700"],
            provider: fontProviders.google()
        },
        {
            name: "Space Grotesk",
            cssVariable: "--font-space-grotesk",
            weights: ["300 700"],
            provider: fontProviders.google()
        },
        {
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            provider: fontProviders.google(),
            fallbacks: ["monospace"]
        }
    ],
    markdown: {
        processor: satteri({
            hastPlugins: [
                satteriCallouts({
                    theme: "docusaurus"
                })
            ]
        }),
    }
});
