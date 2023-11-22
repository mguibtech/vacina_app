import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './components/Header/Header';
import {ThemeProvider} from 'styled-components';

import useAppearance from './hooks/Appearance/useAppearance';

function App() {
  // const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const {theme} = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={style.App}>
        <Header name="mGuibao" title="Hello to" />
        <Button color="white" title="Change theme" onPress={() => {}} />
      </SafeAreaView>
    </ThemeProvider>
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
