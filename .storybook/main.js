module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    config.optimizeDeps.include = [
      'react-is',
      '@base2/pretty-print-object',
      ...config.optimizeDeps.include,
    ];
    return config;
  },
};
