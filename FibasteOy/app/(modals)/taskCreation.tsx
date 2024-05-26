import React, { useEffect, useState } from "react";
import { View, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, Modal, Button, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

import * as ImagePicker from 'expo-image-picker';
import Colors from "@/constants/Colors";
import DummyTasks from "../listing/DummyTasks";

const TaskCreation = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("0");
    const [urgency, setUrgency] = useState("low"); // default value
    const [description, setDescription] = useState("");
    const [descriptionCount, setDescriptionCount] = useState(0); // New state variable for showing maximum characters
    const [address, setAddress] = useState("");

    const [image, setImage] = useState(null);
    const [status, requestPermission] = ImagePicker.useCameraPermissions();

    // Permissions requested correctly
    useEffect(() => {
        requestPermission();
    }, []);

    const handleUrgencyChange = (newUrgency) => {
        setUrgency(newUrgency);
        console.log(`Urgency set to: ${newUrgency}`);
    };

    const getButtonStyle = (newUrgency) => ({
        ...styles.urgencyButton,
        backgroundColor: urgency === newUrgency ? Colors.light_grey : Colors.light_grey,
        opacity: urgency === newUrgency ? 1 : .3,
    });

    // Image Upload
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const openCamera = async () => {
        // ask the user for permission to access camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow Fibaste to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        // explore the result
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    const handleImageReset = () => {
        setImage(null);
    }

    const handleDescriptionChange = (text: string) => {
        if (text.length <= 150) { // check if the text is within the limit
            setDescription(text);
            setDescriptionCount(text.length); // update the character count
        }
    }

    const [isPickerVisible, setPickerVisible] = useState(false);

    const showPicker = () => {
        setPickerVisible(true);
    };

    const hidePicker = () => {
        setPickerVisible(false);
    };

    const handleAddButton = () => {
        // TODO: adding tasks in the array
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Where do you need help?"
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
                
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.label}>Urgency</Text>
                    <TouchableOpacity onPress={() => console.log('INFORMATION ABOUT THE URGENCYr')}>
                    <Ionicons style={styles.iconOutliner} name="information" size={14} color={Colors.black} />
                    </TouchableOpacity>
                </View>
                <View style={styles.urgencyButtonsContainer}>
                    <TouchableOpacity style={getButtonStyle('low')} onPress={() => handleUrgencyChange('low')}>
                    <Text style={styles.urgencyButtonText}>Low</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={getButtonStyle('medium')} onPress={() => handleUrgencyChange('medium')}>
                    <Text style={styles.urgencyButtonText}>Medium</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={getButtonStyle('high')} onPress={() => handleUrgencyChange('high')}>
                    <Text style={styles.urgencyButtonText}>High</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageButtonsContainer}>
                    <TouchableOpacity style={styles.imageButton} onPress={openCamera}>
                        <Ionicons name="camera-outline" size={30} color={Colors.dark_grey} />
                        <Text style={styles.imageButtonText}>Take Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                        <Ionicons name="image-outline" size={30} color={Colors.dark_grey} />
                        <Text style={styles.imageButtonText}>Choose Photo</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ): (
                        <Text style={styles.imageText}>No image selected yet.</Text>
                    )}
                </View>

                <View style={styles.imageButtonContainerCenter}>
                    <TouchableOpacity style={styles.imageButton} onPress={handleImageReset}>
                        <Ionicons name="trash-outline" size={30} color={Colors.dark_grey} />
                        <Text style={styles.imageButtonText}>Reset Image</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Short Description</Text>
                <TextInput
                    style={[styles.input, styles.largerInput]}
                    placeholder="Explain the needed help..."
                    placeholderTextColor={Colors.light_grey}
                    value={description}
                    onChangeText={handleDescriptionChange} // use the new handler
                    multiline={true}
                />
                <Text style={styles.countText}>{descriptionCount}/150</Text>
                
                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    placeholderTextColor={Colors.light_grey}
                    value={address}
                    onChangeText={setAddress}
                />
                
                <TouchableOpacity style={styles.button} onPress={handleAddButton}>
                    <Text style={styles.addText}>Add Task</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        );
    }

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    imageContainer: {
        borderColor: Colors.light_grey,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal: 30,
        marginBottom: 13,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 250,
    },
    imageText: {
        textAlign: 'center',
        paddingTop: 100,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 20,
        overflow: 'hidden',
    },
    iconContainer: {
        padding: 20,
        alignItems: 'center',
    },
    iconOutliner: {
        marginLeft: 10,
        marginTop: 10,
        padding: 5,
        borderColor: Colors.light_grey,
        borderWidth: 1,
        borderRadius: 7,
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
        backgroundColor: Colors.fibasteBlue,
        borderRadius: 10,
        height: 60,
        padding: 10,
        alignItems: 'center',
        marginTop: 20, // Add this
        marginBottom: 50,
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
      imageButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
    },
    imageButtonContainerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
    },
    imageButton: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageButtonText: {
        color: Colors.dark_grey,
        fontFamily: 'TE',
        fontWeight: 'bold',
        fontSize: 16,
    },
    countText: {
        marginTop: -10,
        marginLeft: 12,
        color: Colors.dark_grey,
        fontFamily: 'TE',
        fontSize: 14,
    },
    urgencyButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
    },
    urgencyButton: {
        padding: 10,
        //backgroundColor: Colors.light_grey,
        borderRadius: 10,
    },
    urgencyButtonText: {
        color: Colors.dark_grey,
        fontFamily: 'TE',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TaskCreation;