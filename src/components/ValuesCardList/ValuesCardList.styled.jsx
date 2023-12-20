import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  width: 100%;
  margin-top: 36px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    width: 768px;
    margin: 0 auto;
    margin-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 1240px;
    margin-top: 124px;
  }
`;

export const Img = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 342px;
  }
  @media screen and (min-width: 1280px) {
    width: 596px;
  }
`;

export const Divcard = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    gap: 48px;
  }
`;
