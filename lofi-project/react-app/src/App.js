import React from 'react';

import WindowHeader from './components/WindowHeader';
import Main from './components/Main';

import { Container } from './styles/AppStyles';

function App() {

  return (
    <Container>
      <WindowHeader />
      <Main />

      <footer>
        Made with ❤, Vinícius Gajo, 2020.
      </footer>
    </Container>
  );
}

export default App;
