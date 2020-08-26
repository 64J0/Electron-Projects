import styled from 'styled-components';
import darkTheme from '../../styles/colorDefaults';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  button {
    border: none;
    height: 1.5rem;
    width: 3rem;

    &:hover {
      color: #ffffff;
      background-color: ${darkTheme.red_customized};
    }
  }
`;