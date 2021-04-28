# babel-basic

基础的 babel 环境

## 1. 如何运行

1. 在 workshop 根目录运行 `yarn bootstrap` 来安装依赖,
2. 在当前目录执行 `yarn build` 查看打包结果

当前实现了简易版的 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 的功能。

```shell
import { Button } from "songjp-ui-react";
      ↓ ↓ ↓ ↓ ↓ ↓
import Button from "songjp-ui-react/lib/button";
import "songjp-ui-react/lib/theme-default/button.css";
```
