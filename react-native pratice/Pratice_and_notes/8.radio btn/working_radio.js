import React, { useState } from 'react'
import { View, TouchableOpacity, Text, TouchableHighlight, StyleSheet } from 'react-native'

function radio() {
    const [radio, setradio] = useState(1)
    return (
        <View>
            <TouchableOpacity onPress={()=>setradio(1)}>
                <View style={design.radio_alignment}>

                    <View style={design.radio}>
                        {
                            radio==1? <View style={design.radioBg} ></View>:null
                        }
                    </View>

                    <Text style={{ margin:10, borderRadius: 12, textAlign: 'center' }}>Hello</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setradio(2)}>
                <View style={design.radio_alignment}>

                    <View style={design.radio}>
                        {
                            radio==2? <View style={design.radioBg} ></View>:null
                        }
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