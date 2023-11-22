import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Header} from './components/Header/Header';
import {ThemeProvider} from 'styled-components';

import useAppearance from './hooks/Appearance/useAppearance';
import {Container} from './styles';

function App() {
  // const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const {theme} = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header name="mGuibao" title="Hello to" />
        <Button color="white" title="Change theme" onPress={() => {}} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
