import styled from 'styled-components';
import darkTheme from './colorDefaults';

export const Container = styled.div`
  height: 100vh;

  footer {
    text-align: center;
    color: ${darkTheme.text_color};
    position: relative;
    bottom: -1.5rem;
  }
`;