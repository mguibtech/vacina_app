import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './components/Header/Header';

function App() {
  return (
    <SafeAreaView style={style.App}>
      <Header name="mGuibao" title="Hello to" />
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    // margin: 20,
    backgroundColor: '#000',
  },
});
