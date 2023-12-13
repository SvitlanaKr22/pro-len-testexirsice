import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  margin-top: 146px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
    margin-top: 170px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;
export const H1 = styled.h1`
  width: 100%;
  font-family: 'Oswald';
  font-size: 36px;
  line-height: 36px;
  color: #173d33;
  font-weight: 300;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 485px;
    font-size: 64px;
    line-height: 64px;
  }
`;

export const Par = styled.p`
  width: 100%;
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #173d33;
  font-weight: 300;
  letter-spacing: -0.04em;
  margin-bottom: 20px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    width: 363px;
  }
`;

export const Divpb = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Line = styled.div`
  background-color: #97d28b;
  width: 100%;
  height: 1px;
  margin: 24px 8px 12px 8px;
`;
export const Parl = styled.span`
  margin: 0;
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #173d33;
  font-weight: 300;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    margin: 0 6px;
  }
`;

export const Divimg = styled.div`
  width: 100%;
  height: 759px;
  margin: 54px 8px 12px 8px;
`;

export const Divbtn = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
