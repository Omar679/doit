import {
  NotoSerif_400Regular,
  NotoSerif_400Regular_Italic,
  NotoSerif_700Bold,
  NotoSerif_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/noto-serif";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sPlashAnimationFinished, setSPlashAnimationFinished] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    notoRegular: NotoSerif_400Regular,
    notoItalic: NotoSerif_400Regular_Italic,
    notoBold: NotoSerif_700Bold,
    notoBoldItalic: NotoSerif_700Bold_Italic,
  });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      setIsLoaded(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimated = !isLoaded || !sPlashAnimationFinished;
  if (showAnimated) {
    return (
      <Animation setSPlashAnimationFinished={setSPlashAnimationFinished} />
    );
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Animation = ({
  setSPlashAnimationFinished = (isCanceled) => {},
}: {
  setSPlashAnimationFinished?: (isCanceled: boolean) => void;
}) => {
  return (
    <Animated.View
      exiting={FadeOut}
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <LottieView
        onAnimationFinish={(isCanceled) => {
          // console.log("Canceled", isCanceled);
          if (!isCanceled) {
            setSPlashAnimationFinished(true);
          }
        }}
        autoPlay
        loop={false}
        style={{
          width: "100%",
          aspectRatio: 1,
          backgroundColor: "#fff",
        }}
        source={require("../assets/lottie/ai.json")}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
