import React from "react";
import { Button } from "react-native";

const AddListing = ({ addListing }) => {
    return <Button title="Add Listing" onPress={addListing} />;
};

export default AddListing;