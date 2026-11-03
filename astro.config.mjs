// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import satteriCallouts from 'satteri-callouts';

// https://astro.build/config
export default defineConfig({
    site: "https://chungkw.github.io",
    base: "/",
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
