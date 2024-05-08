import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

function Radio() {
  const [radioButtons, setRadioButtons] = useState([
    { label: 'abhishek 1', value: 'abhishek' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (radioButtonsArray) => {
    const selected = radioButtonsArray.find((button) => button.selected);
    setSelectedOption(selected.value);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={handleSelectOption}
        layout="row"
      />
      <Text>Selected Option: {selectedOption}</Text>
    </View>
  );
}

export default Radio;
