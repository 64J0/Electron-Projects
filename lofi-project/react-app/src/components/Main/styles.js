import styled from 'styled-components';
import darkTheme from '../../styles/colorDefaults';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  color: ${darkTheme.text_color};

  h1 {
    margin: 0.5rem 0.5rem 0;
  }

  select {
    cursor: pointer;
    font-size: 1rem; 
    margin:0 0 2rem 2rem;
    border-radius: 8px;
    background-color: ${darkTheme.blue_customized};
  }

  option {
    cursor: pointer;
    width: 100%;
    background-color: ${darkTheme.blue_customized};
  }

  div#player {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: ${darkTheme.darker_background};

    iframe {
      display: initial;
      border: none;
      padding: 1.5rem 0;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  justify-content: space-between;
`;