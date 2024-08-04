const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'), // Add this line
      };
      return webpackConfig;
    },
  },
};
