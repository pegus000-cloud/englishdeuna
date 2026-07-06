# English A2 Offline Coach

Standalone PWA for A2 English students. The app is fully isolated from SusNotas and sysnotas.

## What it does

- Short A2 speaking scenarios.
- Device text-to-speech for model pronunciation.
- Local progress storage in the browser.
- Heuristic offline feedback using browser speech recognition when available.
- PWA cache for offline usage after the first load.

## Important note about "local pronunciation correction"

This project does not use paid APIs or cloud tokens. It relies on:

- Browser/device speech synthesis for listening.
- Browser/device speech recognition for transcript capture.
- Local JavaScript comparison between the expected sentence and the recognized sentence.

On Android, real offline speech recognition depends on installing the English offline speech pack in the device settings. Without that pack, some browsers may require connectivity for recognition.

## Local run

Serve the folder with any static server or upload it directly to a separate web folder.

Example with PHP:

```powershell
php -S localhost:8080
```

Then open `http://localhost:8080`.

## Suggested separate publish path

Publish to an isolated directory such as:

`public_html/english-a2-offline-coach/`

No SusNotas files are required for this app.

## Mobile build notes

- Android native shell is already compiling locally from the `android/` folder.
- iOS cannot be compiled on this Windows machine with Xcode, so the project includes `codemagic.yaml` for cloud builds with Codemagic.
- An alternate build lane now exists in `expo-wrapper/`, following the same Expo WebView-shell approach that worked better for SusNotas.
- The Expo wrapper reuses the hosted app at `https://gonali.co/english-a2-offline-coach/` and is ready for EAS Build on both Android and iOS.
- Before pushing the project to any Git provider, keep `android/keystore.properties`, the `work/signing/` folder, and any Apple signing files out of the repository.
- In Codemagic, the iOS workflow still needs:
  - a connected Git repository
  - an App Store Connect API integration
  - iOS signing configured for bundle id `co.englishdeuna.mobile`
