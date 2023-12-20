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

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 36px;
  padding: 0;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 24px;
    margin-top: 96px;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
    margin-top: 124px;
  }
`;

export const Par = styled.p`
  font-family: 'Fira Sans';
  font-size: 18px;
  color: #173d33;
  font-weight: 300;
  letter-spacing: -0.04em;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Span = styled.span`
  color: #828382;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-weight: 300;
`;

export const Img = styled.img`
  width: 148px;
  height: 168px;

  @media screen and (min-width: 768px) {
    width: 159px;
  }
  @media screen and (min-width: 1280px) {
    width: 274px;
    height: 290px;
  }
`;
