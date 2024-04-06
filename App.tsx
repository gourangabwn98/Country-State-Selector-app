import React from 'react';
import {View, StyleSheet} from 'react-native';
import CountryStateSelector from './components/CountryStateSelector';

const App = () => {
  return (
    <View style={styles.container}>
      <CountryStateSelector />
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
});

export default App;
