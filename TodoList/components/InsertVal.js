import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';

const InsertVal = () => {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: '50%'}}>Title</Text>
      <TextInput style={styles.txt} placeholder="Todo's Title"></TextInput>
      <Text style={{textAlign: 'center'}}>Description</Text>
      <TextInput
        style={styles.txt}
        placeholder="Todo's Description"></TextInput>
    </View>
  );
};

export default InsertVal;

const styles = StyleSheet.create({
  txt: {
    borderWidth: 1,
    marginHorizontal: 50,
    marginVertical: 20,
    height: 30,
  },
});
