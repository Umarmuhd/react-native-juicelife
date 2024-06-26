# react-native-juicelife

The package allows you take ai workouts using juicelife, install, add keys and use. No stress :)

## Installation

Add react-native-juicelife to your project by running:

```sh
npm install react-native-juicelife
```

### **One more thing**

To front-load the installation work, let's also install and configure dependencies used by this project, being **react-native-webview**

run:

```sh
npm install react-native-webview
```

for iOS: `cd iOS && pod install && cd ..`

for expo applications run:

```sh
expo install react-native-webview
```

and that's it, you're all good to go!

## Usage

```js
import { multiply } from 'react-native-juicelife';

// ...

const result = await multiply(3, 7);
```

```javascript
import React from 'react';
import { Workout } from 'react-native-juicelife';
import { View } from 'react-native';

function Pay() {
  return (
    <View style={{ flex: 1 }}>
      <Workout apiKey="xxxxxx" workoutId="xxxxxxx" />
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
