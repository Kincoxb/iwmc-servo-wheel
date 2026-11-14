# iWMC 产品宣传页

本项目是无需构建的静态网页，可部署到 GitHub Pages。

## 本地预览

安装 Node.js 后运行 `node server.cjs`，浏览器打开 http://127.0.0.1:4173。
也可直接打开 `index.html`。

## 页面与资料

- `index.html`：页面、响应式样式和资料弹窗。
- `assets/`：从用户提供宣传资料提取的产品和场景图片。
- `assets/docs/`：宣传手册、MBDT 型号图纸及预览图片。
- `make-assets.js`：素材裁切脚本，需要 `@napi-rs/canvas` 以及 `tmp/brochure-hd-1.png`（宣传手册第 1 页、240 DPI 渲染图）。

系列参数按 K4C62-2609 宣传手册；iWMC070 标为开发中产品。
MBDT 抱闸版本数据按 3110700443SS V1.0 图纸单独展示。
场景选型建议属于网页补充文案，需按实际工况校核。

## 发布

待用户确认页面和目标 GitHub 仓库后，将静态文件推送到仓库，通过 GitHub Pages 发布。当前尚未配置远程仓库，未发布到线上。
