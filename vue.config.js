module.exports = {
  publicPath: '/',
  outputDir: 'docs',
    configureWebpack: {
      performance: {
        maxAssetSize: 300000,  // 2 MiB
        maxEntrypointSize: 300000,  // 2 MiB
      },
    },
  };