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
            provider: fontProviders.google(),
            display: "swap",
            fallbacks: ["sans-serif"]
        },
        {
            name: "Space Grotesk",
            cssVariable: "--font-space-grotesk",
            weights: ["300 700"],
            provider: fontProviders.google(),
            display: "swap",
            fallbacks: ["sans-serif"]
        },
        {
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            provider: fontProviders.google(),
            display: "swap",
            fallbacks: ["monospace"]
        }
    ],
    image: {
        layout: "constrained"
    },
    markdown: {
        processor: satteri({
            hastPlugins: [
                satteriCallouts({
                    theme: "docusaurus"
                }),
                satteriExternalLinks({
                    rel: ["noopener", "noreferrer"],
                    target: "_blank",
                    // this plugin adds a really annoying <span> wrapped around the contents below
                    // this is applied on that <span>
                    contentProperties: { style: "display: contents;" },
                    content: {
                        type: "element",
                        tagName: "svg",
                        properties: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            fill: "currentColor",
                            className: ["bi", "bi-box-arrow-up-right"],
                            viewBox: "0 0 16 16"
                        },
                        children: [
                            {
                                type: "element",
                                tagName: "path",
                                properties: {
                                    fillRule: "evenodd",
                                    d: "M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                                },
                                children: []
                            },
                            {
                                type: "element",
                                tagName: "path",
                                properties: {
                                    fillRule: "evenodd",
                                    d: "M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                                },
                                children: []
                            }
                        ]
                    },
                    // this is applied on the generated <a>
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
