import React from 'react';

import { Container } from './styles';

export default function WindowHeader() {
  return (
    <Container>
      <button onClick={window.close}>
        X
      </button>
    </Container>
  )
}