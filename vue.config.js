module.exports = {
  publicPath: '/project-name/',
  outputDir: 'docs',
    configureWebpack: {
      performance: {
        maxAssetSize: 2_097_152,  // 2 MiB
        maxEntrypointSize: 2_097_152,  // 2 MiB
      },
    },
  };