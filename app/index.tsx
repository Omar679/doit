import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./onBoarding";
import ScreewnTEst from "./screewnTEst";

const HomePage = () => {
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
    <>
      <Stack.Screen />
      {isFirstLaunch ? (
        <Onboarding />
      ) : (
        <ScreewnTEst />
      )}
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
