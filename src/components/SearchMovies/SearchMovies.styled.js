import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  font-size: 20px;
  line-height: 1.2;
  width: 300px;
  padding: 5px;
  border: 1px solid #767676;
  cursor: pointer;
  transition: all 500ms linear cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    border: 1px solid blue;
  }
`;

export const Button = styled.button`
  background-color: #efefef;
  border: 1px solid #767676;
  color: black;
  font-size: 20px;
  line-height: 1.2;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 500ms linear cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
`;
