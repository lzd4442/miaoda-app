import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miaoda.app',
  appName: '妙达',
  webDir: 'dist',
  android: {
    backgroundColor: '#ffffff',
    allowMixedContent: true,
  },
  plugins: {},
};

export default config;
