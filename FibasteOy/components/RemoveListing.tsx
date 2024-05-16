import React from "react";
import { Button } from "react-native";

const RemoveListing = ({ removeListing }) => {
    return <Button title="Remove listing" onPress={removeListing} />;
};

export default RemoveListing;