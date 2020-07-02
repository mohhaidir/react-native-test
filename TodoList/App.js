import React from 'react';
import {Text, View, TextInput} from 'react-native';

import Header from './components/Header';
import InserVal from './components/InsertVal';
import Buttons from './components/Buttons';

const App = () => {
  return (
    <View>
      <Header />
      <InserVal />
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        Todo List
      </Text>
      <Buttons />
    </View>
  );
};

export default App;
