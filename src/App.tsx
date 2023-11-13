import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={style.App}>
      <Text style={style.title}>Testando app do SRC</Text>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
});
