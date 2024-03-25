import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./onBoarding";
import HomeScreen from "./HomeScreen";
import colors from "../assets/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<null | boolean>(null);
  useEffect(() => {
    async function checkFirstLaunch() {
      try {
        const value = await AsyncStorage.getItem("isFirstLaunch");
        if (value === null) {
          setIsFirstLaunch(true);
          // await AsyncStorage.setItem("isFirstLaunch", "false"); // Set to false after first launch
        } else {
          // setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error("Error storing data in AsyncStorage:", error);
      }
    }

    checkFirstLaunch();
  }, []);

  {
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <GestureHandlerRootView>

      <Onboarding />
      </GestureHandlerRootView>
    </SafeAreaView>
    // <>
    //   <Stack.Screen />
    //   {isFirstLaunch ? (
    //     <Onboarding />
    //   ) : (
    //     <HomeScreen />
    //   )}
    // </>
  );
};

export default App;

const styles = StyleSheet.create({});
