import React, { useState } from "react";
import { View, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, Modal, Button, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ImagePicker from 'react-native-image-picker';

import Colors from "@/constants/Colors";

const TaskCreation = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("0");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);

  const handleAddButton = () => {
    // TODO: Add task to the list
  };

  const [isPickerVisible, setPickerVisible] = useState(false);

  const showPicker = () => {
    setPickerVisible(true);
  };

  const hidePicker = () => {
    setPickerVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                placeholderTextColor={Colors.light_grey}
                value={title}
                onChangeText={setTitle}
            />
            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                placeholder="Price / min 10 €"
                placeholderTextColor={Colors.light_grey}
                value={price}
                onChangeText={setPrice}
            />
            <Text style={styles.label}>Duration</Text>
            <TouchableOpacity style={styles.input} onPress={showPicker}>
                <Text style={{ color: Colors.light_grey}}>{duration} min</Text>
            </TouchableOpacity>

            <Modal visible={isPickerVisible} transparent={true} animationType="slide">
                <View style={styles.modalView}>
                    <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={duration}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setDuration(itemValue)}
                    >
                        <Picker.Item label="0 min" value="0" key={0}/>
                        <Picker.Item label="15 min" value="15" key={15}/>
                        <Picker.Item label="30 min" value="30" key={30}/>
                        <Picker.Item label="45 min" value="45" key={45}/>
                        <Picker.Item label="60 min" value="60" key={60}/>
                        <Picker.Item label="75 min" value="75" key={75}/>
                        <Picker.Item label="90 min" value="90" key={90}/>
                        <Picker.Item label="105 min" value="105" key={105}/>
                        <Picker.Item label="120 min" value="120" key={120}/>
                    </Picker>
                    </View>
                    <TouchableOpacity style={styles.doneButton} onPress={hidePicker}>
                    <Text style={styles.doneButtonText}>Set Time</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Text style={styles.label}>Short Description</Text>
            <TextInput
                style={[styles.input, styles.largerInput]}
                placeholder="Short Description"
                placeholderTextColor={Colors.light_grey}
                value={description}
                onChangeText={setDescription}
                multiline={true}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor={Colors.light_grey}
                value={address}
                onChangeText={setAddress}
            />
            
            <TouchableOpacity style={styles.button} onPress={handleAddButton}>
                <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: Colors.white,
        padding: 20,
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        padding: 10,
    },
    label: {
        marginLeft: 12,
        marginTop: 12,
        color: Colors.dark_grey,
        fontFamily: 'TE',
        fontWeight: 'bold',
        fontSize: 16,
    },
    input: {
        padding: 10,
        height: 40,
        margin: 12,
        marginBottom: 20, // add some space at the bottom
        borderWidth: 1,
        borderColor: Colors.light_grey, // lighter border color
        borderRadius: 10, // rounded corners
        color: Colors.dark_grey, // dark text color
        textAlign: 'left',
    },
    largerInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        alignItems: 'center',
        backgroundColor: Colors.fibasteBlue,
        borderRadius: 10,
        height: 60,
        padding: 10,
        margin: 12,
    },
    addText: {
        marginTop: 10,
        color: Colors.white,
        fontFamily: 'TE',
        fontWeight: 'bold',
        fontSize: 16,
    },
    doneButton: {
        backgroundColor: Colors.fibasteBlue,
        borderRadius: 10,
        height: 60,
        padding: 10,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 60,
        width: '100%',
      },
      doneButtonText: {
        color: Colors.white,
        fontFamily: 'TE',
        fontWeight: 'bold',
        fontSize: 16,
      },
});

export default TaskCreation;