const type = require("@babel/types");

/**
 * ref.opts: plugin 传入的参数， 如 libraryName
 * path.node.source: 解析出来是 antd
 */
const visitor = {
  ImportDeclaration(path, ref) {
    const specifiers = path.node.specifiers;
    const libraryName = path.node.source.value;
    /**
     * 第二个判断条件是判断import语句里面有没有使用 import {xxx} 的语法，如果有，就替换
     * 不加这个条件的后果就是，死循环
     */
    if (
      libraryName === ref.opts.libraryName &&
      specifiers.find((specifier) => type.isImportSpecifier(specifier))
    ) {
      const declarationNodes = [];
      specifiers.forEach((specifier) => {
        /** isImportDefaultSpecifier: 默认导入的
         *
         * 为什么要这么判断?
         * 因为可能会有这种写法，import React, { Component } from 'react';
         */
        if (!type.isImportDefaultSpecifier(specifier)) {
          declarationNodes.push(
            /**
             * importDeclaration 第一个参数是import xxx from module 里面的xxx
             * xxx可以是 {yyy} => [importSpecifier], yyy => [importDefaultSpecifier], 空 => []
             * 第二个参数是module字符串
             */
            type.importDeclaration(
              [type.importDefaultSpecifier(specifier.local)],
              // type.stringLiteral: 返回一个字面量字符串
              type.stringLiteral(
                `${libraryName}/lib/${specifier.local.name.toLowerCase()}`
              )
            )
          );
          if (ref.opts.styleSuffix) {
            declarationNodes.push(
              type.importDeclaration(
                [], // 空的specifier, 这样就是 import from "xxxx"
                type.stringLiteral(
                  `${libraryName}/lib/theme-default/${specifier.local.name.toLowerCase()}.${
                    ref.opts.styleSuffix
                  }`
                )
              )
            );
          }
        }
      });
      // 一个节点替换成多个
      path.replaceWithMultiple(declarationNodes);
    }
  },
};

module.exports = function (babel) {
  return {
    visitor,
  };
};
