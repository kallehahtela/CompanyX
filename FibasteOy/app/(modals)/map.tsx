// Importing necessary modules and components
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import * as Location from 'expo-location';
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

// Defining the Map component
const Map = () => {
    // Using React's useState hook to manage the location and error message state
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // useRef hook to get the reference of the MapView component
    const mapRef = React.useRef(null);

    // Function to get the current location of the user
    const locate = async () => {
        // Requesting permission to access location
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            // If permission is not granted, set an error message
            setErrorMsg('Permission to access location was denied');
            return;
        }

        // Get the current position of the user
        let location = await Location.getCurrentPositionAsync({});
        // Set the location state
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });

        // If the mapRef is defined, animate the map to the current region
        if (mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }, 1000); // Duration in milliseconds. This is the timer you mentioned. It's used to animate the transition to the user's location over a period of 1 second (1000 milliseconds).
        }
    };

    // Render the MapView component
    return (
        <View style={styles.container}>
            <MapView ref={mapRef} style={styles.map} />
            <TouchableOpacity style={styles.locateButton} onPress={locate}>
                <Ionicons name="locate-sharp" size={30} color={Colors.black}/>
            </TouchableOpacity>
        </View>
    );
}

// Defining the styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    locateButton: {
        padding: 5,
        backgroundColor: Colors.white,
        position: 'absolute',
        bottom: 25,
        right: 20,
        borderRadius: 25,
        borderColor: Colors.light_grey,
        borderWidth: StyleSheet.hairlineWidth,
    },
});

// Exporting the Map component
export default Map;