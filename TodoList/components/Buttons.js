import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Buttons = () => {
  return (
    <View style={styles.but}>
      <Text style={styles.post}>+</Text>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  post: {
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 20,
    marginTop: 10,
    width: 90,
    height: 30,
    backgroundColor: '#1abc9c',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  but: {
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '36.8%',
  },
});
