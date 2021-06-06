// prettier-ignore
module.exports = function (source) {
  // NOTE: 折叠效果依赖于字符串拼接，不要轻易改动以下字符串，包括空格换行等
  source = source.replace(/```html([\s\S]+?)```/g, (match) => {
    return (
`
<details>
<summary>显示代码</summary>

${match}
</details>
`);
});
// console.log("#### md loader result ####", source)
return 'module.exports = ' + JSON.stringify(source);
}
