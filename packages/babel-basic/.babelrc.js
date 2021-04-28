module.exports = {
  plugins: [
    [
      "./plugin/index",
      {
        // 这些属性可以随意，最后可以在opts里面访问得到
        libraryName: "songjp-ui-react",
        styleSuffix: "css",
      },
    ],
  ],
};
