const path = require("path");
const MiniCssExtractPlugin = require("./mini-css-extract-plugin");

module.exports = {
  // entry 默认名称是 main，
  entry: path.join(__dirname, "./src/index.js"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: path.resolve("./my-custom-loaders/md-loader.js"),
      },
      {
        test: /\.scss$/,
        use: [
          // {
          //   loader: path.resolve('./style-loader/dist/cjs.js')
          //   // loader: 'style-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // loader: path.resolve("./css-loader/dist/cjs.js"),
            loader: path.resolve("./css-loader/dist/cjs.js"),
          },
          {
            loader: path.resolve("./resolve-url-loader"),
          },
          {
            loader: "sass-loader",
            options: {
              // 必须设置 sourceMap
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: path.resolve('./style-loader/dist/cjs.js')
          //   // loader: 'style-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: path.resolve("./css-loader/dist/cjs.js"),
          },
          {
            loader: path.resolve("./less-loader/dist/cjs.js"),
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  1: `;@import "~@/variable.less"`,
                  "@ceshi1": "red",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolveLoader: {
    // modules: [path.join(__dirname, './src/loaders')]
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    minimize: false,
  },
};
