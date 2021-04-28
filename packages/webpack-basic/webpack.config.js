const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "dist.cjs.js",
    library: {
      name: "MyLib",
      type: "commonjs2",
    },
  },
  externals: {},
  plugins: [],
  optimization: {
    minimize: false,
  },
};
