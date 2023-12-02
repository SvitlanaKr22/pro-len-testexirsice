import { useState } from 'react';
import sprite from './../../images/svg/sprite.svg';
import { Div, Divh, Logo, ButtonBurgerMenu, Buttons } from './Header.styled';
import { Button } from '../Button/Button';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  const [isClickIcon, setIsClickIcon] = useState(false);

  const onOpen = () => setIsClickIcon(true);
  const onClose = () => setIsClickIcon(false);

  return (
    <Div>
      <Divh>
        <Logo>
          <use href={sprite + `#icon-Group-1`}></use>
        </Logo>
        <Buttons>
          <ButtonBurgerMenu onClick={onOpen}>
            <svg width={18} height={18} stroke="#292D32">
              <use href={sprite + `#icon-menu`}></use>
            </svg>
          </ButtonBurgerMenu>
          <Button text={'Get in touch'} />
        </Buttons>
        {isClickIcon && <BurgerMenu onClose={onClose} />}
      </Divh>
    </Div>
  );
};
