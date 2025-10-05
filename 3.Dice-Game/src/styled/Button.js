import styled from "styled-components";

export const Button = styled.button`
  height: 44px;
  min-width: 220px;
  color: white;
  background-color: black;
  padding: 10px 18px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: #ffffff;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    transition: 0.3s background ease-in;
  }
`;

export const OutlinedButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
    transition: 0.3s background ease-in;
  }
`;
