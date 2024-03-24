import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
    title: "The Secret to Getting Things Done",
    subtitle: "Let's do this!",
    image: require("../../assets/onboarding/image3.png"),
  },
];

const Onboarding = () => {
  const [screenIndex, setscreenIndex] = useState(0);
  const data = onBoardinData[screenIndex];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={data.image}
        style={{
          width: 100,
          aspectRatio: 1,
          resizeMode: "contain",
          backgroundColor: "#414141",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          top: -20,
          alignItems: "center",
          justifyContent:'center'
        }}
      >
        <Text>{data.title}</Text>
        <Text>{data.subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
