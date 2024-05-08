import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Hello from './Project_todo/todo'

export default function App() {
  return (
    <NavigationContainer  >
     <StatusBar/>
    <Hello/>
   
    </NavigationContainer>
  );
}





