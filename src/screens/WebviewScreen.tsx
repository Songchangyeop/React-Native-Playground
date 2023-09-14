import { WebView } from "react-native-webview";
import { SafeAreaView, StyleSheet } from "react-native";

const WebviewScreen = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <WebView
        source={{ uri: "https://helloipju.co.kr" }}
        style={{ marginTop: 0 }}
      />
    </SafeAreaView>
  );
};

export default WebviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
