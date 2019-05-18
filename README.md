# Ionic 4 Angular Capacitor Testbed

## Table of contents
- [Getting started](#getting-started)
- [Building for Android](#building-for-android)
- [Building for iOS](#building-for-ios)
- [Licence](#licence)


An [Ionic 4](https://ionicframework.com/docs/) testbed with [Capacitor](https://capacitor.ionicframework.com/) integration and [Angular](https://angular.io/) framework.

The purpose of this project is to test the Ionic 4 framework and all related frameworks or technologies, it has no particular functional purpose.

Some of the technologies tested are:

- [Sass](http://sass-lang.com/guide),
- Angular in general, but specifically [Angular 7](https://v7.angular.io/docs),
- [RxJS 6](https://rxjs-dev.firebaseapp.com/),
- [Ionic Native](https://ionicframework.com/docs/native/)
- Other [Cordova plugins](https://cordova.apache.org/plugins/),
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) created with [Stencil](https://stenciljs.com/).

This project is an experimental testbed but I intend to use only recommended and best-practices so that it can serve as a reference repository for my other projects.


## Extra Angular modules
- [@angular/animations](https://www.npmjs.com/package/@angular/animations) for [animations](https://angular.io/guide/animations).


{:#getting-started}
## Getting started
Clone this repo then install dependencies:
``` bash
npm i
```

There are 2 npm scripts to build and open the project in either Android Studio or Xcode.

{:#building-for-android}
## Building for Android
``` bash
npm run build:android
```

This will:
- build the web poject
- copy the web code into the Android project
- update the Capacitor and Cordova plugins in the Android project
- open the project Android Studio

From there you have to use the Android Studio build process and deploy either to a device or AVD.

{:#building-for-ios}
## Building for iOS

**Note: this only works on macOS as it requires Xcode.**

``` bash
npm run build:ios
```

This will:
- build the web poject
- copy the web code into the iOS project
- update the Capacitor and Cordova plugins in the iOS project
- open the project in Xcode

From there you have to use the Xcode build process and deploy either to a device or the Simulat


{:#licence}
## Licence

Feel free to use, copy, clone, modify, improve. There is no obligation and no guarantee, but please let me know if you find bugs or any issues, or if you have questions or would like to contribute.

Enjoy ;)