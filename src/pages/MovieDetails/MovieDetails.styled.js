import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { ArrowBack } from '@emotion-icons/boxicons-regular';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;

export const GoBackBtn = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #767676;
  border-radius: 4px;
  cursor: pointer;
`;

export const Main = styled.main`
  padding: 10px;
`;

export const ArrowBackIcon = styled(ArrowBack)`
  width: 16px;
  height: 16px;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`;

export const Image = styled.img`
  width: 300px;
  margin-right: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 15px 0;
`;

export const Title = styled.h1`
  font-size: 32 px;
  margin-top: 15px;
`;

export const List = styled.ul`
  list-style: square inside;
  font-size: 16px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid gray;
`;
