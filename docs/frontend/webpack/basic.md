---
title: Webpack 基础知识
---

# Webpack 基础知识

## 基础配置

```js
module.exports = {
  mode: 'production',
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'static/js/[name].[contenthash:8].js', // 导出的入口文件名
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js', // code split 对应 chunk
    assetModuleFilename: 'static/assets/[name].[contenthash:4][ext]', // 应用于 Asset Modules
    clean: {
      keep: /manifest.json|favicon.ico/, // 保留一些文档
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // 编译匹配include路径的文件
        include: [resolve('src')],
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, , 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // 等价于之前的 url-loader，会根据文件大小决定内联还是拆分. 默认4kb
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 4 * 1024, // 4kb
        //   },
        // },
      },

      // 等价于之前的 raw-loader，导入文件的字符串内容
      {
        test: /\.txt/,
        type: 'asset/source',
      },

      // 等价于 file-loader
      {
        test: /\.(?:ico|gif)$/i,
        type: 'asset/resource',
      },

      // 等价于 url-loader，会转为 base64
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new WebpackBar(), // 编译进度条
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      ignoreOrder: true,
    }),
  ],
  optimization: {
    minimize: true, //  使用 TerserPlugin 或其它在 optimization.minimizer定义的插件压缩 bundle
  },
  // 默认 'web'，可忽略。该选项会影响打包后的代码，比如'node'，则打包后的代码中加载 chunk 的方式是通过原生 require()。而 'web' 时则通过 <script> 去加载
  // target: 'web',
}
```

## loader

Webpack 天生支持如下模块类型：

- ECMAScript 模块
- CommonJS 模块
- AMD 模块
- Assets
- WebAssembly 模块

通过 **loader** 可以使 webpack 支持多种语言和预处理器语法编写的模块。**loader** 向 webpack 描述了如何处理*非原生模块*，并将相关**依赖**引入到你的 bundles 中。

规则包含多个 loader 时，**从后往前**执行。比如上面配置中的 `['style-loader', MiniCssExtractPlugin.loader, , 'css-loader', 'postcss-loader', 'sass-loader']`，先执行 `sass-loader`，再执行 `postcss-loader`...

### plugin

以各种方式自定义 webpack 构建过程，注册在 Webpack 的生命周期钩子上
