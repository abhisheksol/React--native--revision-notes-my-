import React, { useState } from 'react'
import { View, TouchableOpacity, Text, TouchableHighlight, StyleSheet } from 'react-native'

function radio() {
    const [radio, setradio] = useState(1)
    return (
        <View>
            <TouchableOpacity>
                <View style={design.radio_alignment}>

                    <View style={design.radio}>
                        <View style={design.radioBg} ></View> 
                        {/* ya ami display karcha ka nahi ? tya varun ami decide karu shakto (if else ne) */}
                    </View>

                    <Text style={{ margin:10, borderRadius: 12, textAlign: 'center' }}>Hello</Text>
                </View>
            </TouchableOpacity>
         
        </View>
    )
}

const design = StyleSheet.create({
    radio_alignment:{
         flexDirection:'row',
         alignItems:'center',

    },
    radio: {
        height: 32,
        width: 32,
        
        borderColor:'blue',
        borderWidth:2,
        borderRadius: 111,
    },
    radioBg: {
           backgroundColor:'black',
           height:20,
           width:20,
           borderRadius:111,
           margin:4
    }
})
export default radio