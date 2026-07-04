import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "co.englishdeuna.mobile",
  appName: "EnglishDeUna",
  webDir: "outputs",
  backgroundColor: "#102a56",
  server: {
    androidScheme: "https"
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false
  },
  ios: {
    contentInset: "automatic",
    limitsNavigationsToAppBoundDomains: false
  }
};

export default config;
