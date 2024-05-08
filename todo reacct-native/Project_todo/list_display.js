import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

function ListDisplay(props) {
    const [completed, setcompleted] = useState(false)
    const handleDeleteItem = () => {
        props.onDeleteItem(props.text); // Call the onDeleteItem function passed from the parent with the text of the item to be deleted
    }

    const task_check_mark = () => {
        setcompleted(!completed)
        console.warn(completed);
    }

    return (
       
        <View style={{backgroundColor:'rgb(212,212,218)',}}>
            
            <View>
                <Text style={[design.task,completed&& design.completedTask]}> {props.text} </Text>

                {/* Buttons for completing and deleting */}
                <View style={design.buttonsContainer}>
                    <TouchableOpacity style={design.button}>
                        <FontAwesome name="check" size={24} color="green" onPress={task_check_mark} />
                    </TouchableOpacity>
                    <TouchableOpacity style={design.button} onPress={handleDeleteItem}>
                        <FontAwesome name="trash" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const design = StyleSheet.create({
    task: {
        fontSize: 18,
        borderWidth: 1,
        width:360,
        height: 45,
        padding: 6,
        borderColor: 'skyblue',
        borderRadius: 10,
        marginTop: 20,
        shadowColor:"rgb(237,162,34)",
        elevation:15,
        backgroundColor:"white"
    },
    completedTask: {
        textDecorationLine: 'line-through'
    },
    buttonsContainer: {
        left:270,
        flexDirection: 'row',
        marginTop: 5 ,// Adjust as needed for spacing,
        backgroundColor:'rgb(212,212,218)',
    },
    button: {
        marginLeft: 5 // Adjust as needed for spacing
    }
})

export default ListDisplay;
