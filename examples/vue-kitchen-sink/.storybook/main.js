module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|mdx)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    '@storybook/addon-highlight',
  ],
  core: {
    builder: 'webpack4',
  },
  staticDirs: ['../public'],
  features: {
    buildStoriesJson: true,
  },
};
