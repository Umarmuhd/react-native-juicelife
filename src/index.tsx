import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

type WorkoutProps = {
  workoutId: string;
  apiKey: string;
  metaData?: object;
  callback?: string;
};

export function Workout({
  workoutId,
  apiKey,
  metaData,
  ...props
}: WorkoutProps) {
  const [loaded, setLoaded] = React.useState(false);

  console.log({ loaded });

  if (!workoutId || !apiKey) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Workout ID & API Key is required</Text>
      </View>
    );
  }
  return (
    <WebView
      source={{
        uri: `https://juicelife-react.vercel.app/?workoutId=${workoutId}&apiKey=${apiKey}&metaData=${JSON.stringify(metaData)}&callback=${props.callback}`,
      }}
      style={{ flex: 1 }}
      onLoad={() => setLoaded(true)}
    />
  );
}
