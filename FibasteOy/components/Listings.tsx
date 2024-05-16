import { View, Text } from "react-native";
import React from "react";

interface Props {
    listings: any[];
}

const Listings = ({ listings }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Listings</Text>
    </View>
  );
}

export default Listings;