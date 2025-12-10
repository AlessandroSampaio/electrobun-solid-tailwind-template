import packageJson from './package.json';

export default {
  app: {
    name: 'electrobun-solid-tailwind',
    identifier: 'helloworld.electrobun.dev',
    version: packageJson.version,
  },
  build: {
    views: {

    },
    copy: {
      'src/renderers/main/index.html': 'views/main/index.html',
    },
    mac: {
      bundleCEF: false,
    },
    linux: {
      bundleCEF: false,
    },
    win: {
      bundleCEF: false,
    },
  },
  scripts: {
    postBuild: './scripts/postBuild.ts',
  },
};
