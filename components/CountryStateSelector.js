import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countries from '../data';

const CountryStateSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = country => {
    setSelectedCountry(country);
    setSelectedState(null);
  };

  const handleStateChange = state => {
    setSelectedState(state);

    Alert.alert(
      'Selected State',
      `You have selected ${state}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Country and State Selector</Text>
      <View style={styles.innerContainer}>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={handleCountryChange}
          style={styles.picker}>
          <Picker.Item label="Select Country" value={null} />
          {countries.map((country, index) => (
            <Picker.Item
              key={index}
              label={country.name}
              value={country.name}
            />
          ))}
        </Picker>
        {selectedCountry && (
          <Picker
            selectedValue={selectedState}
            onValueChange={handleStateChange}
            style={styles.picker}>
            <Picker.Item label="Select State" value={null} />
            {countries
              .find(country => country.name === selectedCountry)
              .states.map((state, index) => (
                <Picker.Item key={index} label={state} value={state} />
              ))}
          </Picker>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  heading: {
    marginBottom: 30,
    color: '#333',
    fontSize: 30,
  },
  picker: {
    width: 300,
    marginBottom: 20,
  },
});

export default CountryStateSelector;
