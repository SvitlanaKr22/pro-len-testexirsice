import styled from 'styled-components';

export const Button = styled.button`
  //display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 39px;
    border-radius: 500px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: transparent;
    border: solid 1px #97d28b;

    cursor: pointer;
    &:hover,
    &:focus {
      border-color: #97d28b;
      background-color: white;
      box-shadow: 0 0 0 3px #97d28b, 0 0 0 1.5px #97d28b;
    }
  }
`;

export const Span = styled.span`
  display: inline-block;
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #173d33;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &:after {
    content: ' \\1F852';
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #97d28b;
    color: #173d33;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
