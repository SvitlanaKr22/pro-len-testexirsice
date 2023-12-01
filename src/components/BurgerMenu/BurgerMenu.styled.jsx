import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
  width: 320px;
  height: 568px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: rgba(23, 61, 51, 0.75);
  border-radius: 25px;
  backdrop-filter: blur(3px);

  @media screen and (min-width: 768px) {
    height: 100vh - 24px;
    width: 365px;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 0 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const Line = styled.div`
  background-color: #ffffff;
  width: 96%;
  height: 1px;
  margin: 4px 8px 16px 8px;
`;

export const Span = styled.span`
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
`;
export const List = styled.ul`
  margin: 0 auto;
  padding: 0 8px;
  list-style: none;
`;
export const ItemMenu = styled.a`
  font-family: 'Fira Sans';
  font-size: 24px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.25);
  cursor: pointer;

  &:after {
    content: ' \\1F865';
    color: rgba(255, 255, 255, 0.25);
  }

  &:hover,
  &:focus-visible {
    color: #ffffff;
    &:after {
      content: ' \\1F865';
      color: #ffffff;
    }
  }
`;
export const Listsn = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin-left: 8px;
  position: absolute;
  top: 92%;
  left: 16px;
`;
export const Li = styled.li`
  margin-bottom: 8px;
`;
export const ButtonIcon = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
`;
