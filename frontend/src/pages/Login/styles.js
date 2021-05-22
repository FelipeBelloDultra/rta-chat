import styled from 'styled-components';

export const Contianer = styled.form`
  max-width: 1020px;
  width: 100%;
  height: 100%;
  padding: 30px 10px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: space-between;

  .button-login {
    width: 250px;
    margin: 30px auto 0;

    svg {
      margin-left: 10px;
    }
  }
`;

export const ButtonShowPassowrd = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  color: var(--white);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    max-width: 610px;
    width: 100%;

    & + div {
      margin-top: 30px;
    }
  }
`;
