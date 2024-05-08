import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function ExampleComponent() {
   const [arry, setarry] = useState([])
   const [input, setinput] = useState("")
  
   const add=()=>{ 
     if(input){
        setarry(Prevarry=>[...Prevarry,input])
        setinput(""); 
        // console.log(arry);  
     }
     
   }

  return (
    <View>
      <Text>Welcome</Text>
      <TextInput
      placeholder='Add Names here'
      style={{borderColor:'pink', borderWidth:1,marginBottom:15,marginTop:5,width:200}}
       onChangeText={text=>setinput(text)}
       value={input}
      />

      
      <Button
      title='add'
      onPress={add}
      />
      <Button
      title='Clear'
      color={'red'}
      
      onPress={()=>setarry([])}
      />
      
     <View>
        {arry.map((value,index)=>{
          return  <Text key={index}>{value}</Text>;
        })}
     </View>
    </View>
  );
}

export default ExampleComponent;
