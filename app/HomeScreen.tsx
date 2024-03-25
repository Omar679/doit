import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Button title="Clear async Storage" onPress={()=>AsyncStorage.clear()} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
