import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  img {
    margin-bottom: 20px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 18px;
      margin-bottom: 20px;
    }

    span {
      color: #3B9DC0;
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const ButtonGroup = styled.div`
  width: 270px;

  button {
    margin-bottom: 20px;

    svg {
      margin-left: 10px;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    color: #FFF;
    filter: brightness(0.6);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      margin-left: 10px;
    }
  }
`;
