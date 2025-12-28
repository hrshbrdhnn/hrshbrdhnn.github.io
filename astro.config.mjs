// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // https://shiki.style/themes
      theme: 'github-dark-default',
    },
  },
  experimental: {
    fonts: [
      {
        name: "Roboto",
        cssVariable: "--font-roboto",
        provider: fontProviders.google(),
        // Default included:
        // weights: [400, 500, 600, 700, 800] ,
        // styles: ["normal", "italics"],
        // subsets: ["cyrillic-ext", "cyrillic", "greek-ext", "greek", "vietnamese", "latin-ext", "latin"],
        // fallbacks: ["sans-serif"],
      },
      {
        name: "Inter",
        cssVariable: "--font-inter",
        provider: fontProviders.google(),
        // Specify weights that are actually used
        // weights: [400, 500, 600, 700],
        // Specify styles that are actually used
        // styles: ["normal"],
        // Download only font files for characters used on the page
        // subsets: ["cyrillic"],
      },
      {
        name: "Open Sans",
        cssVariable: "--font-open-sans",
        provider: fontProviders.google(),
        // Specify weights that are actually used
        weights: [400, 500, 600, 700, 800],
        // Specify styles that are actually used
        // styles: ["normal", "italics"],
        // Download only font files for characters used on the page
        // subsets: ["latin-ext", "latin"],
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    domains: ["github.com", "cloudinary.com"],
  },

  integrations: [mdx({
    rehypePlugins: [
      rehypeCodeTitles,
      [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }]
      // [rehypePrettyCode,
      //   {
      //     theme: 'github-dark',
      //   }
      // ]
    ]
  })]
});