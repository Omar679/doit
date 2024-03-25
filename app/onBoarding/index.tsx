import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import colors from "../../assets/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, router } from "expo-router";

import Animated from "react-native-reanimated";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

const onBoardinData = [
  {
    id: "1",
    title: "Get Organized ✅",
    subtitle:
      "A to-do app that helps you manage your tasks and stay productive!",
    image: require("../../assets/onboarding/image1.png"),
  },
  {
    id: "2",
    title: "Achieve Your Goals with Ease",
    subtitle: "Organize your day, set reminders, and achieve your goals! ➡️☑️",
    image: require("../../assets/onboarding/image2.png"),
  },
  {
    id: "3",
    title: "Let's do this!",
    subtitle: "The Secret to Getting Things Done",
    image: require("../../assets/onboarding/image3.png"),
  },
];

const Onboarding = ({}) => {
  const [screenIndex, setScreenIndex] = useState(2);
  const data = onBoardinData[screenIndex];

  const onContinue = () => {
    if (screenIndex >= onBoardinData.length - 1) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const endOnboarding = async () => {
    await AsyncStorage.setItem("isFirstLaunch", "false");
    router.replace("./HomeScreen");
  };

  const onBack = () => {
    if (screenIndex >= 0) {
      setScreenIndex(screenIndex - 1);
    }
  };

  const swipeNext = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);
  const swipePrev = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);
  const swipes = Gesture.Simultaneous(swipeNext, swipePrev);

  return (
    <SafeAreaView style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
      <GestureDetector gesture={swipes} >
        <View style={{flex:1}}>
        <Image source={data.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
        </View>
      </GestureDetector>

      <View style={styles.indicatorContainer}>
        {onBoardinData.map((_, i) => (
          <View
            key={i}
            style={[
              styles.indicator,
              { backgroundColor: i == screenIndex ? colors.primary : "grey" },
            ]}
          />
        ))}
      </View>
      <View style={styles.navigationContainer}>
        <Text onPress={endOnboarding}>Skip</Text>
        <Pressable onPress={onContinue} style={styles.nextContainer}>
          <Entypo name="chevron-right" size={24} color={colors.white} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  image: {
    width: 400,
    height: 400,
    // aspectRatio: 1,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  textContainer: { alignItems: "center", gap: 20 },
  title: { fontSize: 30, fontFamily: "notoBold" },
  subtitle: { fontSize: 15, fontFamily: "notoBold" },
  indicatorContainer: { flexDirection: "row", gap: 5 },
  indicator: {
    backgroundColor: "gray",
    width: 10,
    aspectRatio: 1,
    borderRadius: 10,
  },
  navigationContainer: { flexDirection: "row", gap: 150, alignItems: "center" },
  nextContainer: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 15,
  },
});
