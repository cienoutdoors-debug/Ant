# AntCompass - Build Now (SDK 52)
Ready-to-build Expo app. No extra native modules. 
- APK profile: `production` in `eas.json` (buildType: apk).

## Build (EAS Dashboard)
1) Push this repo to GitHub.
2) On expo.dev/eas, create a new project and connect the GitHub repo.
3) Trigger **Android • production** build → outputs .apk.

## Local quick check (optional)
npm install
npx expo-doctor
npx expo start
