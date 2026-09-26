# zi-book

妙达 App（2.0）。

## 下载

👉 **[点击下载 APK（v2.0.0）](https://github.com/lzd4442/zi-book/releases/download/v2.0.0/zi-book.apk)**

下载后直接安装（Android 7.0+）。

## 技术栈

- 前端：Vite + TypeScript + Capacitor
- 打包：GitHub Actions 自动编译 APK
- 核心：WebView iframe 包装壳

## 开发

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android   # 用 Android Studio 打开
```

## 自动构建

每次推送代码，GitHub Actions 自动编译 APK 并发布到 Release。
