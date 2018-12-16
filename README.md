### web学习

- nodejs包安装
 - 查看nodejs配置
> npm config ls
- 修改镜像源
> npm config set registry https://registry.npm.taobao.org 
> npm info underscore 查看镜像配置
 - 设置nodejs包安装路径
> npm config set prefix D:\worktool\front\nodejs
 - 安装 全局:global 局部去掉-g
> npm install -g browser-sync 
- browser-sync 启动项目
> browser-sync start --server --file "stylesheets/*.css,*.html,scripts/*.js"

- 源码地址:
>http://www.bignerdranch.com/downloads/front-end-dev-resources.zip