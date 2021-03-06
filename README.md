# 项目名称：myvuedemo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 移动端适配

本项目采用方案一：

方案一：

参考：https://www.cnblogs.com/XHappyness/p/15792482.html

适配方案：amfe-flexible + postcss-pxtorem,注意postcss-pxtorem版本不要超过6，否则运行编译会引起报错。

适配步骤：npm安装amfe-flexible和postcss-pxtorem => index.html中加meta视口 => main.js中引入amfe-flexible => 配置postcss.config.js文件（按750设计稿还是其他自己修改）
这样，我们就可以按原设计稿尺寸愉快地原样输出写px了。
```
npm i amfe-flexible@2.2.1 -S
npm i postcss-pxtorem@5.1.1 -D
```

方案二：
参考：https://www.cnblogs.com/zhangnan35/p/12682925.html

### less 的使用及常用语法
cli3使用less更为简单些，只需安装less依赖包即可
```
npm i less less-loader -D
```
然后在xx.vue文件中写入style即可。
```
<style lang="less">

</style>
```
### eslint规范：
eslint命名规范报错参考：https://blog.csdn.net/u013078755/article/details/123581070?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&utm_relevant_index=1

## eslint报错
新增.prettierrc文件：
```
{
  "semi": false,
  "singleQuote": true
}
```

.eslintrc.js配置：
```
module.exports = {
  root: true,
  // 要启用的环境
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 启用 airbnb 规则
  // extends: 'airbnb-base','@vue/airbnb', 
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // 个人自定义规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi':0,
    'key-spacing': 0,
    'no-trailing-spaces':0,
  },
  // 使用语言及版本
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  // parserOptions: {
  //   parser: 'babel-eslint',
  // },
  plugins:['html', 'vue'],
};
```
eslint报错解决参考：

https://www.php.cn/tool/vscode/435419.html

https://www.it610.com/article/1297093574302703616.htm

## git 常用操作：

第一次：远仓只有一个文件夹无代码的话pull不了（会报错）

git config --global user.name "ylb"

git config --global user.email "ylb@126.com"

ssh-keygen -t rsa -C "ylb@126.com"

cat ~/.ssh/id_rsa.pub

git remote add origin 远仓地址

git checkout -b ylb-dev

git branch ylb-dev-02

git rebase master

git checkout master

git rebase ylb-dev

git add . && git commit -m "feat:新增登录模块"

git push origin master
---
其他：

git config --global --list

git branch -vv

git remote -v

git pull origin master && git push -u origin master

git常规操作参考：https://www.cnblogs.com/coderxiaobai/p/14780195.html

git分支操作参考：https://www.cnblogs.com/mcat/p/5831212.html
---
vscode操作参考:

https://blog.csdn.net/yourstorm/article/details/123987260

https://www.csdn.net/tags/OtTaIgysMzY4OC1ibG9n.html

git变基：用rebase代替merge比较好，不会进行合并操作
https://www.csdn.net/tags/MtTaIg0sODY2ODAwLWJsb2cO0O0O.html

https://blog.csdn.net/wzdede/article/details/107896372
---

github怎么取消邮箱信息推送：

参考：https://www.csdn.net/tags/OtDaYgwsMTQ3NjQtYmxvZwO0O0OO0O0O.html