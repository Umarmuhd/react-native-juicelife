import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Workout } from 'react-native-juicelife';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   multiply(3, 7).then(setResult);
  // }, []);

  return (
    <>
      <View style={styles.container}>
        <Workout apiKey="1" workoutId="1" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
