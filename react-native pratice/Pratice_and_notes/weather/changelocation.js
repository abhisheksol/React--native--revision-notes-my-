import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

function Change_Location() {
    const navigation = useNavigation(); // Move inside the functional component
    const [city, setCity] = useState('Mumbai');
    
    const handleCreate = () => {
        navigation.navigate('Home', { name_city: city });
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Add City'
                    placeholderTextColor='white'
                    onChangeText={(text) => setCity(text)}
                    style={styles.input}
                />
            </View>

            <TouchableOpacity onPress={handleCreate} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444479',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'white',
        height: 50,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 16,
        color: '#444479',
        fontWeight: 'bold',
    },
});

export default Change_Location;
