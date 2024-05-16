import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddListingForm = ({ addListing }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [duration, setDuration] = useState('');

    const submitForm = () => {
        addListing({ title, price, description, address, duration });
        setTitle('');
        setPrice('');
        setDescription('');
        setAddress('');
        setDuration('');
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
            <TextInput style={styles.input} placeholder="Price" value={price} onChangeText={setPrice} />
            <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
            <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
            <TextInput style={styles.input} placeholder="Duration" value={duration} onChangeText={setDuration} />
            <Button title="Add Listing" onPress={submitForm} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
});

export default AddListingForm;