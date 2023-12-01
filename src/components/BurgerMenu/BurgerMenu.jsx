import sprite from './../../images/svg/sprite.svg';
import {
  Div,
  Button,
  Span,
  List,
  ItemMenu,
  Listsn,
  Line,
  Li,
  ButtonIcon,
} from './BurgerMenu.styled';

export const BurgerMenu = ({ onClose }) => {
  const menuItems = [
    'Main',
    'About',
    'Service',
    'Cases',
    'FAQ',
    'Customers',
    'Contact Us',
  ];
  return (
    <Div>
      <Button onClick={onClose}>
        <svg width={20} height={20}>
          <use href={sprite + `#icon-iconamoon_close-light`}></use>
        </svg>
        <Span>close</Span>
      </Button>
      <Line />
      <List>
        {menuItems.map(item => {
          return (
            <Li key={item}>
              <ItemMenu>{item}</ItemMenu>
            </Li>
          );
        })}
      </List>
      <Listsn aria-label={'social media'}>
        <ButtonIcon>
          <svg width={24} height={24}>
            <use href={sprite + `#icon-facebook`}></use>
          </svg>
        </ButtonIcon>
        <ButtonIcon>
          <svg width={24} height={24}>
            <use href={sprite + `#icon-instagram`}></use>
          </svg>
        </ButtonIcon>
      </Listsn>
    </Div>
  );
};
