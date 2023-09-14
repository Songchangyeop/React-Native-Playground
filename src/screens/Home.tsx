import React, { useEffect, useRef, useState } from "react";
import WebView from "react-native-webview";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [canGoBack, setCanGoBack] = useState(false);
  const webviewRef = useRef<WebView | null>(null);

  useEffect(() => {
    const handleBackButtonPress = () => {
      if (canGoBack && webviewRef.current) {
        webviewRef.current.goBack();
        return true;
      } else {
        navigation.goBack();
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButtonPress
    );

    return () => {
      backHandler.remove();
    };
  }, [canGoBack, navigation]);

  return (
    <WebView
      source={{ uri: "https://helloipju.co.kr" }}
      ref={webviewRef}
      // 제스쳐 백 라우팅
      allowsBackForwardNavigationGestures
      onNavigationStateChange={(navState) => {
        setCanGoBack(navState.canGoBack);
      }}
    />
  );
};
export default Home;
