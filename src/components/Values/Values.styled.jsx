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

export const Divflex = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 124px;
  }
`;

export const UpLine = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background-color: #97d28b;
    width: 1px;
    height: 110px;
  }
  @media screen and (min-width: 1280px) {
    height: 87px;
  }
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  color: #173d33;
  font-family: 'Oswald';
  font-weight: 300;
  font-size: 28px;
  line-height: 28px;
  margin: 0;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    width: 272px;
    height: 72px;
    line-height: 36px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    width: 365px;
    height: 96px;
    line-height: 48px;
  }
`;

export const Par = styled.p`
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #173d33;
  font-weight: 300;
  letter-spacing: -0.04em;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 342px;
  }
  @media screen and (min-width: 1280px) {
    width: 459px;
  }
`;
