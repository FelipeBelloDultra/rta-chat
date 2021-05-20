import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  border: 0;
  color: #FFF;
  width: 100%;
  background-color: #3B9DC0;
  transition: filter 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    filter: brightness(0.8);
  }
`;
