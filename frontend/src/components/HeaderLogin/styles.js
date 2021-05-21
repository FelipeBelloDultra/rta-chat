// Packages
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid var(--secondary);
  margin-bottom: 30px;
  padding: 60px 0 30px;

  div {
    max-width: 1020px;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavGroup = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    padding: 0 30px;
    position: relative;
    border-radius: 5px;
    transition: filter 0.2s;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      background-color: var(--secondary);
      transform: scale(0.1);
      transition: all 0.2s;
      border-radius: 5px;
    }

    &:hover:not(.active) {
      filter: brightness(0.8);
    }

    &.active:before {
      opacity: 1;
      transform: scale(1);
    }

    & + a {
      margin-left: 40px;
    }

    svg {
      margin-left: 10px;
    }
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  padding: 10px 30px 10px 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-right: 10px;
  }
`;
