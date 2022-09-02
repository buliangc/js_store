React 官方为我们提供了一个 ESLint 的插件，专门用来检查 Hooks 是否正确被使用，它就是 eslint-plugin-react-hooks 。通过这个插件，如果发现缺少依赖项定义这样违反规则的情况，就会报一个错误提示（类似于语法错误的提示），方便进行修改，从而避免 Hooks 的错误使用。

# npm install eslint-plugin-react-hooks --save-dev

```javascript
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "plugins": [
      "react-hooks"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },
```