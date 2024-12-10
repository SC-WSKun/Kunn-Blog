# Kunn-Blog

## 项目目标

> 💗一点碎碎念💗
>
> 2021年用Hexo部署了自己的博客，用的是别人的主题。现在服务器过期了，想趁着重新部署一个博客的同时，用上这几年的技术积累自己写一个个人网站。

- [ ] 界面美观，使用Motion制作页面动画
- [ ] 支持主题切换，使用Matter.js制作主题切换组件
- [ ] 支持分类，使用Node自动读取Blog文件夹下的配置，生成博客分类导航栏
- [ ] 支持博客目录，使用Node自动读取Blog文件夹下的配置，生成分类内跳转侧边栏
- [ ] 支持文章内目录，使用Kramed等库，读取Markdown文件，解析标题，生成文档内目录
- [ ] 博客应该使用服务端渲染

## 本地调试

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 参考文档
1. [Motion](https://motion.dev/) 简单易上手的动画库
2. [Matter.js](https://brm.io/matter-js/) 网页端2D物理引擎
3. [kramed](https://github.com/GitbookIO/kramed) 强大且高效的Markdown解析器