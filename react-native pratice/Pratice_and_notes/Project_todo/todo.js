import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import Task from './list_display';
import Text_input from './text_input';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

function Todo() {
    const [tasks, setTasks] = useState([]);

    // Function to load tasks from AsyncStorage
    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks !== null) {
                setTasks(JSON.parse(savedTasks));
            }
        } catch (error) {
            console.error('Error loading tasks from AsyncStorage:', error);
        }
    };

    // Function to save tasks to AsyncStorage
    const saveTasks = async (updatedTasks) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        } catch (error) {
            console.error('Error saving tasks to AsyncStorage:', error);
        }
    };

    useEffect(() => {
        loadTasks(); // Load tasks when component mounts
    }, []); // Empty dependency array ensures this effect runs only once

    const handleAddItem = (item) => {
        const newItem = { id: tasks.length + 1, text: item };
        const updatedTasks = [...tasks, newItem];
        setTasks(updatedTasks);
        saveTasks(updatedTasks); // Save tasks after adding a new one
    }

    const handleDeleteItem = (text) => {
        const updatedTasks = tasks.filter(task => task.text !== text);
        setTasks(updatedTasks);
        saveTasks(updatedTasks); // Save tasks after deleting one
    }

    return (
        <>
            <View style={design.head_view}>
                <View>
                    <Text style={design.heading}>
                        Welcome to todo!!
                    </Text>
                </View>
                <ScrollView>
                {tasks.map((task) => (
                    <Task key={task.id} text={task.text} onDeleteItem={() => handleDeleteItem(task.text)} />
                ))}</ScrollView>
            </View>
            <Text_input onAddItem={handleAddItem} />
        </>
    )
}

const design = StyleSheet.create({
    head_view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'rgb(212,212,218)',
        
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        margin: 25
    }
})

export default Todo;

