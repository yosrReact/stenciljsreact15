import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { resolve } from 'path';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-components',
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false
    },
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget ({
      outDir: resolve(__dirname, '../react-library/lib/components/stencil-generated/').replace(/\\/g, '/')
    }),
    reactOutputTarget ({
      outDir: resolve(__dirname, '../react-library-ssr/lib/components/stencil-generated/').replace(/\\/g, '/'),
      hydrateModule: '@test/stencil-components/hydrate'
    }),
  ],
  globalScript: "src/global.ts",
  plugins: [sass()],
  testing: {
    browserHeadless: 'new'
  }
};
