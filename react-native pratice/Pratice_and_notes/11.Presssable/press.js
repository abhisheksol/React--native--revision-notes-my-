import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

function Press() {
    const [LongPress, setLongPress] = useState(false)
    const [ShortPress, setShortPress] = useState(false)
  const pressFun = () => {
    setShortPress(!ShortPress)
    console.warn(ShortPress);
  }

  const pressLong = () => {
    setLongPress(!LongPress)
    console.warn(LongPress);
  }

  return (
    <View>
      <Pressable
        onPress={pressFun}
        onLongPress={pressLong}
      >
        <Text style={styles.text}>Press Me 👆</Text>
      </Pressable>
      
      <View style={styles.imageContainer}>
       {
        LongPress?  <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoBVvi3ZJ6qshWZHQKHFkeWDmg76847TLBw&s' }}
        style={styles.image}
      />:null
       }
       {
        ShortPress?<Text style={{fontSize:50}}> Plz Press LongPress </Text>:null
       }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'pink',
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    borderRadius:15,
    elevation:50
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Press;
