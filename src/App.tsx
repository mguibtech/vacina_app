import React from 'react';
import {Header} from './components/Header/Header';
import {ThemeProvider} from 'styled-components';

import useAppearance from './hooks/Appearance/useAppearance';
import {Container} from './styles';
import {Text} from './components/Text/Text';

function App() {
  // const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const {theme} = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header name="mGuibao" title="Hello to" />
        <Text typography="h1" color="primary">
          Testando
        </Text>
      </Container>
    </ThemeProvider>
  );
}

export default App;
