import { View, Text } from "react-native";
import React from "react";

const ProtectedScreen = () => {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: 'TE', fontSize: 30}}>Hello There</Text>
            <Text style={{ fontFamily: 'TE', fontSize: 30, color: 'grey'}}>You should see this page only of you are authenticated</Text>
        </View>
    );
}

export default ProtectedScreen;