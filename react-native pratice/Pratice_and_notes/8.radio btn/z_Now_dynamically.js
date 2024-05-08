import React, { useState } from 'react'
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native'

function radio() {
    const [radio, setradio] = useState(1)
    // console.warn(radio);
    const data = [
        {
            id: 1,
            sub: 'java'
        },
        {
            id: 2,
            sub: 'python'
        },
        {
            id: 3,
            sub: 'c++'
        },
        {
            id: 4,
            sub: 'kotlin'
        },
    ]
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,flexWrap:'wrap', margin:75}}>
            {/* <TouchableOpacity onPress={() => setradio(1)}>
                <View style={design.radio_alignment}>

                    <View style={design.radio}>
                        {
                            radio == 1 ? <View style={design.radioBg} ></View> : null
                        }
                    </View>

                    <Text style={{ margin: 10, borderRadius: 12, textAlign: 'center' }}>Hello</Text>
                </View>
            </TouchableOpacity> */}
            <Text style={{fontSize:25}}>Choice The Correct</Text>

            {
                data.map((item, index) => (
                    <View key={index}>
                        <TouchableOpacity onPress={() => setradio(item.id)}>
                            <View style={design.radio_alignment}>

                                <View style={design.radio}>
                                    {
                                        radio == index+1 ? <View style={design.radioBg} ></View> : null
                                    }
                                </View>

                                <Text style={{ margin: 10, borderRadius: 12, textAlign: 'center' }}>{item.sub}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
            }

        </View>
    )
}

const design = StyleSheet.create({
    radio_alignment: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    radio: {
        height: 32,
        width: 32,

        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 111,
    },
    radioBg: {
        backgroundColor: 'black',
        height: 20,
        width: 20,
        borderRadius: 111,
        margin: 4
    }
})
export default radio