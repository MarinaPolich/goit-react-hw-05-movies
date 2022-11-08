import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 30px;
  margin-right: 20px;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 20px;
  -webkit-box-shadow: 0px 6px 6px 0px rgba(163, 160, 163, 0.66);
  -moz-box-shadow: 0px 6px 6px 0px rgba(163, 160, 163, 0.66);
  box-shadow: 0px 6px 6px 0px rgba(163, 160, 163, 0.66);
`;

export const Main = styled.main`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;
