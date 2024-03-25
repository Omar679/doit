import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./onBoarding";
import HomeScreen from "./HomeScreen";

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
    // <>
    //   <Stack.Screen />
    //   {isFirstLaunch ? (
    //     <Onboarding />
    //   ) : (
    //     <HomeScreen />
    //   )}
    // </>
    <Onboarding />
  );
};

export default App;

const styles = StyleSheet.create({});
