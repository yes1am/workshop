# webpack-loaders

学习 webpack 中的 loader, 比如 css-loader， style-loader 等，以及自己写 loader 处理 md 文件

## 1. 原理

1. 将 css-loader, style-loader 等 loader 的源码拷贝了一份，方便进行调试
2. 而 css-loader 等 loader 的源码是 esm 模式，而 webpack 需要使用 cjs 模式。因此需要进入到每一个 loader 里面执行 `yarn install` 和 `yarn build` (为了方便，已经准备了 `./install-and-build.sh`)。如果改动了 css-loader/src 下的源码，则需要再次执行 `yarn build` (为了方便，已经准备了 `./build.sh`)。

## 2. 如何运行

1. 在 workshop 根目录运行 `yarn bootstrap` 来安装 webpack-loaders 的依赖,
2. 如果需要调试 css-loader 等，那么需要先执行 `./install-and-build.sh` 来安装 css-loader/node_modules，并 build 出 css-loader 的代码到 css-loader/dist 目录。后续如果需要再次对 css-loader 进行 build，则执行 `./build.sh`
3. 执行 `yarn build`，查看 webpack 的打包结果
