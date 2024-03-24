import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{headerShown:false}} />
      <Text style={{ fontFamily: "notoRegular" }}>HomePage</Text>
      <Text style={{ fontFamily: "notoRegular" }}>HomePage</Text>
      <Text style={{ fontFamily: "notoRegular" }}>HomePage</Text>
      <Text style={{ fontFamily: "notoRegular" }}>HomePage</Text>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
