import styled from 'styled-components';

export const Divb = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-left: 85px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 135px;
  }
`;

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

export const Line = styled.div`
  background-color: #97d28b;
  width: 100%;
  height: 1px;
`;

export const Par = styled.p`
  width: 100%;
  font-family: 'Fira Sans';
  font-size: 18px;
  color: #173d33;
  font-weight: 300;
  letter-spacing: -0.04em;
  text-align: justify;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const Paran = styled.p`
  height: auto;
  text-align: justify;
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #173d33;
  font-weight: 300;
  letter-spacing: -0.04em;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 56px;
    margin-top: 4px;
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
    grid-column: 2;
    grid-row: 1;
    font-size: 48px;
    line-height: 48px;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    text-align: left;
    margin-left: 0;
    margin-right: 120px;
  }
`;

export const Divg = styled.div`
  min-width: 100%;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 185px;
    margin-top: 100px;
  }
  @media screen and (min-width: 768px) {
    gap: 185px;
    margin-top: 120px;
  }
`;

export const Divbtn = styled.div`
  @media screen and (min-width: 768px) {
    grid-column: 2;
    grid-row: 1;
    margin-top: auto;
    margin-bottom: 30px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  margin-right: 30px;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    grid-column: 1;
    grid-row: 1/2;
  }
`;

export const Btn = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  font-size: 28px;
  color: #97d28b;
`;

export const Divflex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;
