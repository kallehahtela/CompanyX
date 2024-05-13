import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log("test ~ file: [id].tsx:7 ~ Page ~ id:", id);
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Page;
