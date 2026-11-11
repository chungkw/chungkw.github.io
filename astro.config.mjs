// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import satteriCallouts from 'satteri-callouts';
import satteriExternalLinks from "satteri-external-links"
import mdx from '@astrojs/mdx';

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
                }),
                satteriExternalLinks({
                    rel: ["noopener", "noreferrer"],
                    target: "_blank",
                    content: {
                        type: "element",
                        tagName: "i",
                        properties: {
                            className: ["bi", "bi-box-arrow-up-right"]
                        },
                        children: []
                    },
                    properties: {
                        className: ["icon-link"]
                    }
                })
            ]
        }),
    },
    integrations: [
        mdx()
    ]
});
