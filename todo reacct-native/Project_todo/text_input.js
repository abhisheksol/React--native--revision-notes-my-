import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function Text_input({ onAddItem }) {
    const [items, setItems] = useState('');

    const onPress_Add_btn = () => {
        onAddItem(items);
        setItems('');
    }

    return (
        <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', backgroundColor:"white" }}>
            <TextInput
                placeholder='Add task here ✍🏼'
                style={design.input}
                value={items}
                onChangeText={(text) => setItems(text)}
            />
            <TouchableOpacity style={design.addButton} onPress={onPress_Add_btn}>
                <Text style={design.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const design = StyleSheet.create({
    input: {
        flex: 1,
        height: 45,
        borderWidth: 1,
        borderColor: 'skyblue',
        borderRadius: 10,
        marginLeft: 20,
        marginBottom: 45,
        padding: 8,
        fontSize: 18,
        backgroundColor:"white"
    },
    addButton: {
        backgroundColor: 'grey',
        marginLeft: 5,
        marginBottom: 45,
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        marginRight: 5
    },
    addButtonText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 1
    }
})

export default Text_input
