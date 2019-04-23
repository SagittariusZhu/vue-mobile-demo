module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',

  devServer: {
     open: process.platform === 'darwin',
     host: '0.0.0.0',
     port: 8080,
     https: false,
     hotOnly: false,
     proxy: 'proxy_url'
  }
};
