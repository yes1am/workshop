# React

用于学习调试 React 生态相关的库

## 1. 如何运行

1. 在 workshop 根目录运行 `yarn bootstrap` 来安装依赖,
2. 在当前目录执行 `yarn start`


## 2. 所有项目

### 2.1 React Router

*了解 React Router 的 history 模式和 hash 模式。*

目录: [React-Router-Demo](./src/react-router-demo)

更多分析可参考: [React Router 源码简单分析](https://yes-1-am.gitbook.io/blog/react-kai-fa-shi-jian/reactrouter-yuan-ma-jian-dan-fen-xi)

### 2.2 React Virtualized

目录: [React-Virtualized-Demo](./src/react-virtualized-demo)

当前 react-virtualized 版本: v9.22.3

源码：https://github.com/bvaughn/react-virtualized/tree/v9.22.3

**启动后端服务器:**
```js
node server.js
```

#### 2.2.1 关于图片重复请求的问题解析

由于虚拟列表组件, 只会渲染指定数量的组件，比如有 1000 条数据，但是实际每次 “只渲染十几条数据”。因此会涉及到列表元素的销毁重建。  

如果是图片消息的销毁重建，会重新请求图片服务器(*且经过测试，滚动消息列表不一定都会重新发请求，而如果在没有图片的列表停留久一些时间，再滚动上去查看图片是会重新发请求的，像是 react 内部缓存了渲染结果*)。

如果给图片设置强缓存，那么可以减少真正请求后端的次数，并且响应结果能更快回来。(目前看来此方案优于将图片转为 base64 进行缓存的方法，具体效果待真实环境进行测试)

## 3. React Redux

*梳理 Redux 与 React-Redux 的一个关系，以及了解 React-Redux 的实现原理*

目录: [React-Redux-Demo](./src/react-redux-demo)

更多分析可参考: [React Router 源码简单分析](https://yes-1-am.gitbook.io/blog/react-kai-fa-shi-jian/reactredux-yuan-ma-jian-dan-fen-xi)