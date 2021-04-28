import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/dist.js",
    format: "cjs",
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
  ],
};
