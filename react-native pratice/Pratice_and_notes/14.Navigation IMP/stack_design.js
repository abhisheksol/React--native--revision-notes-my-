import React from 'react'
import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function stack_design() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='Abhi' component={Login}
                options={{

                    // ami Headertitle USe karto kuta la he image,btn, View etc display karna sathi ani
                    // HeaderRight right la place karna sathi
                    // -==============================================Left side design===================================================================

                    headerTitle: () => <Image source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoBVvi3ZJ6qshWZHQKHFkeWDmg76847TLBw&s'
                    }}
                        style={{ width: 40, height: 40,borderRadius:15 }}
                    />,

                    // -==============================================Right side design===================================================================
                    headerRight: () => <Button title="Options" />,


                    // -=================================================================================================================
                    title: 'Abhishek',
                    headerStyle: {
                        backgroundColor: 'rgb(205,204,204)',
                    },
                    headerTitleStyle: {
                        fontSize: 20
                    }
                }}
            />
        </Stack.Navigator>
    )
}


function Login(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(231,230,237)' }}>
            <Text style={{ fontSize: 25 }}> Welcome to Login Page </Text>
            <TouchableOpacity>
                <Text style={{ backgroundColor: 'green', height: 35, padding: 8, borderRadius: 8, elevation: 15 }} onPress={() => props.navigation.navigate('Home')}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    )
}
export default stack_design