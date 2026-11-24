# Appium + WebdriverIO Mobile Tests

Android UI tests for the WebdriverIO native demo app, written with Appium (UiAutomator2), WebdriverIO and TypeScript, using a page object structure.

## What's covered
- Login form: element checks, valid login, validation errors
- Offline behavior: login flow with network disabled

## Run
1. Start an Android emulator and install the demo app
2. `npm install`
3. `npx wdio run wdio.conf.ts`

## Next steps
Run the same config against a real-device cloud such as BrowserStack or Sauce Labs, and add CI.