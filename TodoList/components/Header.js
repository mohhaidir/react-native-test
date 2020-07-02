import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Header = () => {
  return <Text style={styles.title}>Todo List</Text>;
};

export default Header;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 0,
    color: 'black',
    backgroundColor: '#1abc9c',
    height: 45,
    padding: 45,
    fontSize: 20,
    fontWeight: '500',
  },
});
