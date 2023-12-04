import styled from 'styled-components';
export const Div = styled.div`
  position: fixed;
  top: 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
    margin-top: 36px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;
export const Divh = styled.header`
  width: 100%;
  position: relative;
  //position: fixed;
  /* top: 0;
  left: 0; */
  z-index: 100;
  margin: 36px auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 24px 36px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;
export const Logo = styled.svg`
  height: 40px;
`;

export const ButtonBurgerMenu = styled.button`
  width: 40px;
  height: 39px;
  background-color: #dcefd8;
  border-radius: 50%;
  border: solid 1px transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: #dcefd8;
    background-color: white;
    box-shadow: 0 0 0 3px #97d28b, 0 0 0 1.5px #dcefd8;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
