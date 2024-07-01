import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Juicelife from 'react-native-juicelife';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Juicelife
          apiKey="1"
          workoutId="1"
          onSuccess={(_res) => {
            // handle response here
          }}
          autoStart={true}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
