import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

const Map = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}/>
        </View>
    );

    {/* TODO: implement a location handler to showcase near by tasks inm your area */}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Map;