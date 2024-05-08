import React from 'react'
import { View,Text ,StyleSheet} from "react-native";
function grid() {
    const user=[
        { id: '1', name: 'Abhishek ' },
    { id: '2', name: 'Vivek ' },
    { id: '3', name: 'Taaha ' },
    { id: '4', name: 'Om ' },
    { id: '5', name: 'Rahul ' },
    ]

  return (
    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
        <Text style={styles.item}> Grid  </Text>
    </View>
  )


  
  
}
const styles = StyleSheet.create({
    item: {
     backgroundColor:'pink',
     margin:5, 
     height:55,
     width:39,
     
      
    },
  });

export default grid