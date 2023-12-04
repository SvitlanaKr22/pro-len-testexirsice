import styled from 'styled-components';

export const Div = styled.div`
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

export const H2 = styled.h2`
  text-transform: uppercase;
  color: #173d33;
  font-family: 'Oswald';
  font-weight: 300;
  font-size: 28px;
  line-height: 28px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 36px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    margin-top: 100px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    margin-top: 120px;
    margin-bottom: 120px;
    width: max-content;
  }
`;

export const Divflex = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 122px;
  }
  @media screen and (min-width: 1280px) {
    gap: 178px;
  }
`;

export const Divcontact = styled.div`
  margin-top: 0;
  margin-bottom: auto;
  font-size: 20px;
  color: #173d33;
  font-family: 'Fira Sans';
  font-weight: 300;
  letter-spacing: -0.04em;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
  stroke: #173d33;
`;

export const Parv = styled.div`
  margin: 0;
  margin-bottom: 24px;
  display: flex;
  gap: 8px;
  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;
export const Part = styled.div`
  margin: 0;
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Spanl = styled.span`
  display: inline-block;
  font-size: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const Divt = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const Listsn = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  margin-left: 8px;
`;
export const ButtonIcon = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
`;
