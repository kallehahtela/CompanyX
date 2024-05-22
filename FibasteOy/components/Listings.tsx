import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import DummyTasks from "@/app/listing/DummyTasks";
import Colors from "@/constants/Colors";

interface Props {
    listings?: any[];
}

const Listings = ({ listings = DummyTasks }: Props) => {
  const [taskData, setTaskData] = useState(listings);

  useEffect(() => {
    const fetchTasks = async () => {
      return new Promise((resolve) => 
        setTimeout(() => {
          resolve(DummyTasks);
        }, 0)
      );
    };

    fetchTasks().then((DummyTasks) => {
      setTaskData(DummyTasks);
    });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: Colors.white }}>
      {taskData.map((DummyTasks: any) => (
        <View key={DummyTasks.id}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <ImageBackground source={DummyTasks.image} style={styles.image} >
                  <View style={styles.header}>
                    <View style={styles.headerBorder}>
                      <Text>Title: {DummyTasks.title}</Text>
                    </View>

                    <View style={styles.headerBorder}>
                      <Ionicons name="heart-outline" size={20} />
                    </View>
                  </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.infoContainer}>
              <Text>Price: {DummyTasks.price}</Text>
              <Text>Duration: {DummyTasks.duration}</Text>
              <Text>Address: {DummyTasks.address}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: Colors.light_grey,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 70,
    marginHorizontal: 30,
    marginBottom: 13,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 250,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  headerBorder: {
    backgroundColor: Colors.white,
    color: Colors.black,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    borderColor: Colors.light_grey,
    borderRadius: 20,

  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
});

export default Listings;