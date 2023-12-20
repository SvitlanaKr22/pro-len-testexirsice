import styled from 'styled-components';
export const Div = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;

export const Listsn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 12px;
    margin-left: 10px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 12px;
    margin-left: 0;
    margin-bottom: 0;
    margin-right: 200px;
  }
`;
export const ButtonIcon = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const Line = styled.div`
  background-color: #97d28b;
  width: 100%;
  height: 1px;
  margin-top: 100px;
`;

export const Divflex = styled.div`
  position: relative;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 16px;
  }
`;

export const Par = styled.p`
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #173d33;
  font-weight: 300;
  letter-spacing: -0.04em;
  margin: 0;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    margin-bottom: 40px;
    text-align: justify;
  }
`;

export const BtnLink = styled.a`
  fill: #173d33;
  stroke: #173d33;
  position: absolute;
  top: 4px;
  right: 20px;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #97d28b;
  transition: all 500ms ease;

  &:hover {
    background-color: #173d33;
    fill: #97d28b;
    stroke: #97d28b;
    transition: all 500ms ease;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    margin-left: 0;
  }
`;

export const Divpar = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
