import styled from 'styled-components';

export const Svg = styled.svg`
  width: 14px;
  height: 14px;
  fill: #173d33;
  stroke: #173d33;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const ButtonBig = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 39px;
    border-radius: 500px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: #97d28b;
    border: solid 1px transparent;

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
  font-size: 16px;
  font-family: 'Fira Sans';
  color: #173d33;
`;
