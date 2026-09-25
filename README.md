# 妙达 WebView App

一个简单的 Android WebView App，嵌入 https://app-elbt80ehh5oh.miaoda.online

## 技术栈

- Vite + TypeScript
- Capacitor 8

## 开发

```bash
npm install
npm run build
npx cap sync android
npx cap open android   # 用 Android Studio 打开
```

## 构建 APK

需要 Java 21 + Android SDK 35：

```bash
export JAVA_HOME=/path/to/jdk-21
export ANDROID_HOME=/path/to/android-sdk
cd android
./gradlew assembleDebug
```

APK 输出在 `android/app/build/outputs/apk/debug/app-debug.apk`
