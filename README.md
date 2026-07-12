# GitHub Pages 个人作品网站模板

这是一个适合艺术类申博 / 考博 / 作品集展示的 GitHub Pages 静态网站模板。

## 你需要改哪些文件

优先只改：

```text
/data/site.js
/assets/images/
/assets/pdf/portfolio.pdf
```

不要随意改：

```text
index.html
assets/css/style.css
assets/js/main.js
```

## 快速上线步骤

1. 登录 GitHub，新建一个 repository。
2. 推荐仓库名：`用户名.github.io`。例如 GitHub 用户名是 `xiaoyi-li`，仓库名就写 `xiaoyi-li.github.io`。
3. 把本文件夹里的所有文件上传到仓库根目录。
4. 进入仓库 `Settings` → `Pages`。
5. Source 选择 `Deploy from a branch`。
6. Branch 选择 `main`，文件夹选择 `/root`。
7. 保存后等待 GitHub Pages 部署完成。
8. 打开 `https://用户名.github.io` 查看网站。

GitHub Pages 可以直接托管 HTML、CSS、JavaScript 静态文件，也可以从指定分支发布网站。

## 如何替换作品

1. 把作品图片压缩后放入：

```text
assets/images/
```

2. 打开：

```text
data/site.js
```

3. 修改 `works` 数组中的内容，例如：

```js
{
  titleZh: "作品中文名",
  titleEn: "Work English Title",
  year: "2026",
  mediumZh: "影像装置，12 分钟",
  mediumEn: "Video installation, 12 min",
  image: "assets/images/your-work.jpg",
  descriptionZh: "中文作品简介。",
  descriptionEn: "English description."
}
```

## 如何替换 PDF 作品集

把 PDF 文件命名为：

```text
portfolio.pdf
```

然后放到：

```text
assets/pdf/portfolio.pdf
```

如果文件名不同，请修改 `data/site.js` 里的：

```js
portfolioPdf: "assets/pdf/portfolio.pdf"
```

## 图片建议

- 首页和作品图建议使用 `.jpg` 或 `.webp`。
- 单张图建议 300KB–1MB。
- 长边 1600–2500px 通常足够。
- 文件名不要用中文和空格，推荐：`work-2026-room-01.jpg`。

## 让 AI 帮你维护的提示词

可以直接复制：

```text
我在维护一个 GitHub Pages 静态个人作品网站。
网站内容集中在 data/site.js。
请根据我提供的新作品信息，按原有 works 数组格式生成一个新的作品对象。
不要改动字段名，不要输出多余解释。
```

报错时：

```text
这是我的 GitHub Pages 网站文件和报错信息。
请判断是哪一个文件的问题，并给出最小修改方案。
不要重写整个网站。
```
