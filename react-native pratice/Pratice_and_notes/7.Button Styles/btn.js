// Button mada jasta styles karu shakta  nahi  manun ami <Text> la cha Btn banvato => <TouchableHighlights< use karun

import React, { useState } from 'react'
import { View,TouchableHighlight,Text,StyleSheet} from 'react-native'

function btn() {
    const [press, setpress] = useState(false)
    const btn=()=>{
        console.warn("The btn is clicked",press);
        setpress(!press)

    }
  return (
    <View>
    <TouchableHighlight>

        <Text style={design.btn}>Button</Text>

    </TouchableHighlight>
    <TouchableHighlight>

        <Text style={design.btn1} onPress={btn}>Success</Text>

    </TouchableHighlight>
    <TouchableHighlight>

        <Text style={design.btn2}>Fail</Text>

    </TouchableHighlight>
    {
        press? <Text>Hello!</Text>:null
    }
    </View>
 
  )
}

const design = StyleSheet.create({

    btn: {
     backgroundColor:'pink',
     height:45,
     textAlign:'center',
     padding:8,
     shadowColor:'black',
     margin:25,
     
     borderRadius:55,
     
     
    },
    btn1: {
     backgroundColor:'green',
     height:40,
     textAlign:'center',
     padding:8,
     
     margin:25,
     
     borderRadius:55,
     
    },
    btn2: {
     backgroundColor:'red',
     height:40,
     textAlign:'center',
     padding:8,
     
     margin:25,
     
     borderRadius:55,
     
    },
  });
export default btn