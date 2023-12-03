import styled from 'styled-components';

export const Div = styled.div`
  width: 148px;
  height: 197px;
  background-color: #eaedf1;
  @media screen and (min-width: 768px) {
    width: 159px;
  }
  @media screen and (min-width: 1280px) {
    width: 274px;
    height: 339px;
  }
`;

export const Line = styled.div`
  background-color: #97d28b;
  width: 100%;
  height: 1px;
  margin: 33px 12px 12px 12px;

  @media screen and (min-width: 768px) {
    width: 135px;
    margin: 50px 12px 12px 12px;
  }
  @media screen and (min-width: 1280px) {
    margin: 94px 24px 24px 24px;
    width: 226px;
  }
`;
export const H3 = styled.h3`
  margin: 0;
  font-family: 'Oswald';
  font-size: 18px;
  line-height: 24px;
  color: #173d33;
  font-weight: 300;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const Par = styled.p`
  font-family: 'Fira Sans';
  font-size: 14px;
  color: #173d33;
  font-weight: 300;
  letter-spacing: -0.04em;
  margin: 0;
  padding-left: 12px;
  padding-right: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 14px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Divsh = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 4px;
  margin-left: 12px;
  padding-top: 12px;

  @media screen and (min-width: 1280px) {
    gap: 8px;
    margin-left: 24px;
    padding-top: 48px;
  }
`;
