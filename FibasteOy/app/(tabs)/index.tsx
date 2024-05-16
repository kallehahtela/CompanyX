import { useState } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";

import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

const Page = () => {
  const [listings, setListings] = useState([]);

  return (
    <View style={{ flex: 1, marginTop: 60 }}>
      <Stack.Screen options={{
        header: () => <ExploreHeader />,
       }}
      />
      <Listings listings={listings}/>
    </View>
  );
};

export default Page;
