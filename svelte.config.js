import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      babel: {
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
              // No need for babel to resolve modules
              modules: false,
              targets: {
                // ! Very important. Target es6+
                esmodules: true,
              },
            },
          ],
        ],
      },
    })
  ],
}
