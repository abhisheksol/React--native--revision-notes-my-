import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission here, e.g., send data to server
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Simple Form</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default SimpleForm;
