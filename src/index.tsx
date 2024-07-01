import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Text,
  View,
  Modal,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { WebView, type WebViewNavigation } from 'react-native-webview';
import type { JuicelifeProps } from './types';
import { v1 as uuid } from 'uuid';

// const BASE_URL = 'http://localhost:5173';
const BASE_URL = 'https://juicelife-react.vercel.app';

const CLOSE_URL = BASE_URL + '/close';

const Juicelife: React.ForwardRefRenderFunction<
  React.ReactNode,
  JuicelifeProps
> = ({ workoutId, apiKey, metaData, autoStart = false, onSuccess }, ref) => {
  const [isLoading, setisLoading] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const webView = useRef(null);

  const sessionId = uuid();

  useEffect(() => {
    autoStartCheck();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //@ts-ignore
  useImperativeHandle(ref, () => ({
    startWorkout() {
      setshowModal(true);
    },
    cancelWorkout() {
      setshowModal(false);
    },
  }));

  const autoStartCheck = () => {
    if (autoStart) {
      setshowModal(true);
    }
  };

  const onNavigationStateChange = (state: WebViewNavigation) => {
    const { url } = state;
    if (url === CLOSE_URL) {
      setshowModal(false);
      if (onSuccess) {
        onSuccess({
          status: 'success',
          sessionId: sessionId,
        });
      }
    }
  };

  if (!workoutId || !apiKey) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Workout ID & API Key is required</Text>
      </View>
    );
  }

  return (
    <Modal
      style={{ flex: 1 }}
      visible={showModal}
      animationType="slide"
      transparent={false}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          style={{ flex: 1 }}
          onLoadStart={() => setisLoading(true)}
          onLoadEnd={() => setisLoading(false)}
          onNavigationStateChange={onNavigationStateChange}
          ref={webView}
          cacheEnabled={false}
          cacheMode={'LOAD_NO_CACHE'}
          source={{
            uri: `${BASE_URL}?workoutId=${workoutId}&apiKey=${apiKey}&metaData=${JSON.stringify(metaData)}&sessionId=${sessionId}`,
          }}
        />
        {isLoading && (
          <View>
            <ActivityIndicator size="large" color={'green'} />
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export default forwardRef(Juicelife);
