// container: {
//     flex: 1,
//     marginTop:50,
//     alignItems: 'center',
// In app js do this


//   },


import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Button } from 'react-native'


function modal() {
    const [On_Off, setOn_Off] = useState(false)

    return (
        <View style={design.container}>

            <Modal
                transparent={true}
                visible={On_Off}
            >
                <View style={design.center}>
                    <View style={design.modal}>
                        <Text style={design.txt}>hello</Text>
                        <Button title='Close' onPress={()=>setOn_Off(false)} />
                    </View>
                </View>
            </Modal>
            <Button title='open' onPress={()=>setOn_Off(true)}/>
        </View>
    )
}
const design = StyleSheet.create({
    txt: {
        fontSize: 25,
        margin: 15
    }
    , container: {



    },

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {

        alignItems: 'center',
        backgroundColor: 'rgb(255,205,108)',
        height: 150,
        width: 250,
        borderRadius: 25,
        elevation: 55,
        padding: 15
    }
})
export default modal