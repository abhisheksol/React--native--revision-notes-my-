
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./weather/home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Details from './weather/detail';
import Change_Location from './weather/changelocation';

// const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();
function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="Details" component={Details}  />
      <Stack.Screen name="Change_Location" component={Change_Location}  />
    </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;






// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './weather/home';
// import Details from './weather/detail';

// const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer style={{ backgroundColor: '#444479' }}>
//       <Drawer.Navigator
//         drawerStyle={{ backgroundColor: '#444479' }}
//         overlayColor="transparent"
//         screenOptions={{ headerShown: false }}
//       >
//         <Drawer.Screen name="Home" component={Home} />
//         {/* <Drawer.Screen name="Details" component={Details} /> */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;




// import 'react-native-gesture-handler';
// import { StyleSheet, Text, View, StatusBar, Image ,ScrollView} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Hello from './Project_todo/todo'

// export default function App() {
//   const Stack = createNativeStackNavigator()
//   return (
//     <NavigationContainer  >
//       <Stack.Navigator>
//         <Stack.Screen name={'Abhishek'} component={Hello}
//           options={{
//             headerTitle: () =>
             
//             <View style={{flexDirection:'row',}}>
//                 <Image source={{
//                 uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoBVvi3ZJ6qshWZHQKHFkeWDmg76847TLBw&s'
//               }}
//                 style={{ width: 40, height: 40, borderRadius: 15 }}
//               /> 
//               <Text style={{padding:3,fontSize:18}}>Abhishek</Text>
//             </View>
//              ,
             
//           }}
//         />
//       </Stack.Navigator>
//       <StatusBar />
//       {/* <Hello/> */}

//     </NavigationContainer>
//   );
// }


















