import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;

export const MovieListBox = styled.ul`
  list-style: square inside;
`;
