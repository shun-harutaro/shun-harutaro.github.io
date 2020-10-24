module.exports = {
  publicPath: '/',
  outputDir: 'docs',
    configureWebpack: {
      performance: {
        maxAssetSize: 2_097_152,  // 2 MiB
        maxEntrypointSize: 2_097_152,  // 2 MiB
      },
    },
  };