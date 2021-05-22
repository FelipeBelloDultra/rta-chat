import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: var(--secondary);
  border: 1px solid var(--secondary);
  height: 45px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  color: var(--white);

  ${props => props.isErrored &&
    css`
      border-color: var(--error);
    `}

  svg {
    margin-left: 20px;
  }

  input {
    border: 0;
    background-color: transparent;
    height: 100%;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border-radius: 5px;
    color: var(--white);
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: inline-block;
  margin-left: 5px;
`;

export const ErrorMessage = styled.span`
  display: inline-block;
  color: var(--error);
  font-size: 14px;
  margin-left: 5px;
`;
