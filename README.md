# vue-ionic

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Building your App
Capacitor works on a three-step build process: First, your web code is built (if necessary). Next, the built web code is copied to each platform. Finally, the app is compiled using the platform-specific tooling.

- Building web code
Capacitor does not have any built-in feature to build web code. Instead, you will use your framework's build process of choice.

Regardless of your build process, we recommend adding a build script to your package.json to enable the standard frontend build command

This builds your Progressive Web App if you've configured Progressive Web App support already.

- Copying Web Code
Once your web code is built, it needs to be copied into each native project:

```
npx cap copy
```

Run this command each time you perform a build and consider adding it to the end of your build script in package.json.

- Building Native Project

Android
Android relies on Android Studio (or, optionally, the Android CLI tools) to build the app:

```
npx cap copy android
```

```
npx cap open android
```

Once Android Studio launches, you can build your app through the standard Android Studio workflow.
