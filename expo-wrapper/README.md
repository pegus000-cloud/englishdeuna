# EnglishDeUna Expo Wrapper

This wrapper reuses the published `EnglishDeUna` web app instead of duplicating the product in native code.

## Why this pivot

- `SusNotas` used an Expo WebView shell successfully.
- EAS Build is usually simpler than managing custom iOS signing automation in Codemagic.
- We keep one product surface: the offline-first web app hosted at `https://gonali.co/english-a2-offline-coach/`.

## Current behavior

- The wrapper opens the hosted app in a native WebView.
- Android back button support is included.
- A native `Actualizar` button reloads the web app.
- Permissions are predeclared for microphone, camera, notifications, and location.

## Important limitation

This wrapper preserves the existing web strategy: the app works offline after the web assets have been downloaded and cached by the embedded browser. If we want guaranteed first-launch offline inside the native wrapper, the next step is bundling the `outputs/` app locally inside Expo instead of loading the hosted URL.

## Commands

```powershell
npm install
npx expo start
npx eas build --platform android --profile production
npx eas build --platform ios --profile production
```

## App URL

Default:

`https://gonali.co/english-a2-offline-coach/`

Override with:

`EXPO_PUBLIC_APP_URL`
