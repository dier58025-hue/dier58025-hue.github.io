# AI 维护提示词

## 生成新作品条目

```text
我在维护一个 GitHub Pages 静态个人作品网站。
网站内容集中在 data/site.js。
请把下面的作品信息整理成 works 数组中的一个对象。
要求字段包括：titleZh、titleEn、year、mediumZh、mediumEn、image、descriptionZh、descriptionEn。
不要改字段名，不要输出解释，只输出 JS 对象。

作品信息：
[粘贴作品名称、年份、媒介、尺寸、简介、英文信息]
```

## 修改创作陈述

```text
请把下面这段艺术创作陈述改成适合个人作品网站和申博申请使用的版本。
要求：中文 300–500 字，英文 180–280 words；不要太空泛；要能对应作品集。

原文：
[粘贴内容]
```

## 检查 site.js 格式

```text
请检查下面的 data/site.js 是否有语法错误。
重点检查引号、逗号、数组、对象括号是否完整。
如果有问题，只告诉我需要改哪几行。

[粘贴 site.js]
```

## GitHub Pages 部署失败

```text
这是 GitHub Pages 的部署报错。
请判断最可能的问题，并给出最小修复步骤。
不要让我重写整个网站。

报错：
[粘贴报错]
```
