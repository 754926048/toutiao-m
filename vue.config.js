module.exports = {
//   publicPath: '/', // 根路径  Vue CLI 3.3 前使用 baseUrl
//   outputDir: 'dist1', // 构建输出目录
//   assetsDir: 'assets', // 静态资源目录
  lintOnSave: false, // 是否开启eslint保存检测
  //   runtimeCompiler: true,
  //   publicPath: '/', // 设置打包文件相对路径
  devServer: {
    open: true, // 配置自动启动浏览器
    host: 'localhost',
    https: false,
    hotOnly: false, // 热更新
    port: 8080
    // 配置跨域-请求后端的接口

  }

}
