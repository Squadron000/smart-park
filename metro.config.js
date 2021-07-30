/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  // https://stackoverflow.com/questions/60124435/however-this-package-itself-specifies-a-main-module-field-that-could-not-be-r
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], //add here
  },
};
