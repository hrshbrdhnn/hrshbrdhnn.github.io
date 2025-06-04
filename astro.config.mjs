// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        name: "Roboto",
        cssVariable: "--font-roboto",
        provider: fontProviders.google(),
        // Default included:
        // weights: [400] ,
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
        // weights: [400, 600],
        // Specify styles that are actually used
        // styles: ["normal", "italics"],
        // Download only font files for characters used on the page
        // subsets: ["latin-ext", "latin"],
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});