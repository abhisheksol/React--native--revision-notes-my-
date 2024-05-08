import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from "axios";

function get() {
    const [data, setdata] = useState({})
    // console.log(data);
    const get = async () => {
        const response = await axios.get("https://baskend-deploy-1.onrender.com/api/portfolio/get-portfolio-data");
        console.warn(response.data.intro.firstName);
        setdata(response.data)
    }
    useEffect(() => {

        get()
    }, [])

    return (
        
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView>
                <View style={{marginTop:85}}>
                    <Text style={styles.text}>INTRO</Text>
                    <View style={{ backgroundColor: "blue", width: 200, height: 4 }}></View>
                    <Text style={styles.text}>{data.intro.welcomeText}</Text>
                    <Text style={styles.text}>{data.intro.firstName} {data.intro.lastName}</Text>
                    <Text style={[styles.text, styles.caption]}>{data.intro.caption}</Text>
                    <Text style={[styles.text, styles.description]}>{data.intro.description}</Text>
                </View>
                </ScrollView>
            </View>
        
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
    },
    caption: {
        fontWeight: 'bold',
    },
    description: {
        fontStyle: 'italic',
    },
});

export default get


// { "_id": "65f58ae4290d389af145e2b4",
//  "caption": "Web Develop",
//  "description": "I am passionate about leveraging technology to create meaningful solutions and drive positive change",
// "firstName": "Abhishek",
// "lastName": "Solapure",
// "welcomeText": "Hi, i am" }