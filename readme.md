# 焕新墙面 - 专业旧墙翻新服务

一个基于 Vue 3 + Vite 构建的前端项目，支持一键部署到 GitHub Pages。

## 环境准备

### 1. 安装 Node.js

本项目需要 Node.js 环境，请先确认是否已安装：

```bash
node -v
npm -v
```

如果未安装，请访问 [Node.js 官网](https://nodejs.org/) 下载并安装 **LTS（长期支持）版本**。

### 2. 安装 Git（用于部署）

如果需要使用 `npm run deploy` 自动部署到 GitHub Pages，需要安装 Git：

- 下载地址：[Git 官网](https://git-scm.com/downloads)
- 安装完成后验证：

```bash
git --version
```

## 项目运行

### 1. 安装依赖

首次运行项目前，需要安装所有依赖包：

```bash
npm install
```

> 安装过程可能需要几分钟，取决于网络速度。

### 2. 启动开发服务器

安装完成后，启动本地开发服务器：

```bash
npm run dev
```

启动成功后，终端会显示类似如下信息：

```
  VITE v8.2.0  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

在浏览器中访问 `http://localhost:5173/` 即可看到项目运行效果。

> 开发服务器支持热更新，修改代码后浏览器会自动刷新。

### 3. 预览生产构建

如果想预览生产环境的构建效果：

```bash
# 先构建项目
npm run build

# 预览构建结果
npm run preview
```

## 项目部署

### 方式一：自动部署（推荐）

项目已配置 `gh-pages` 自动部署脚本，可将项目一键部署到 GitHub Pages。

#### 前置条件

1. 已在 GitHub 创建仓库（如 `my-vue3-app`）
2. 本地项目已关联远程仓库：

```bash
git remote -v
```

如果未关联，执行：

```bash
git init
git remote add origin https://github.com/<你的用户名>/my-vue3-app.git
```

#### 部署步骤

```bash
npm run deploy
```

该命令会自动完成以下操作：
1. 执行 `npm run build` 构建项目
2. 将 `dist` 目录的内容推送到 `gh-pages` 分支
3. 部署成功后，访问 `https://<你的用户名>.github.io/my-vue3-app/` 即可查看

### 方式二：手动部署

#### 1. 构建项目

```bash
npm run build
```

构建完成后，会在项目根目录生成 `dist` 文件夹，包含所有静态文件。

#### 2. 上传到服务器

将 `dist` 文件夹中的所有文件上传到你的服务器或静态托管平台（如 GitHub Pages、Vercel、Netlify 等）。

**GitHub Pages 手动部署步骤：**

1. 在 GitHub 创建仓库
2. 将 `dist` 文件夹内容推送到 `gh-pages` 分支：

```bash
cd dist
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/<你的用户名>/my-vue3-app.git
git push -u origin gh-pages
```

3. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入仓库 → Settings → Pages
   - Source 选择 `gh-pages` 分支
   - 保存后即可访问

## 项目结构

```
my-vue3-app/
├── src/              # 源代码目录
├── dist/             # 构建输出目录（自动生成）
├── public/           # 静态资源
├── index.html        # 入口 HTML 文件
├── vite.config.js    # Vite 配置文件
├── package.json      # 项目配置和依赖
└── .gitignore        # Git 忽略文件配置
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装项目依赖 |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |
| `npm run deploy` | 构建并部署到 GitHub Pages |

## 注意事项

1. **Base 路径配置**：`vite.config.js` 中的 `base` 配置为 `/my-vue3-app/`，这是 GitHub Pages 项目站点的标准配置。如果使用自定义域名，需改为 `'/'`。

2. **部署前检查**：部署前请确保代码已提交，且 `npm run build` 无报错。

3. **缓存问题**：部署后如果访问看不到最新效果，尝试清除浏览器缓存或使用无痕模式访问。

4. **网络问题**：如果 `npm install` 速度慢，可考虑使用国内镜像：

```bash
npm config set registry https://registry.npmmirror.com
```

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **gh-pages** - GitHub Pages 部署工具