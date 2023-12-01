import sprite from './../../images/svg/sprite.svg';
import { ButtonBig, Span, Svg } from './Button.styled';

export const Button = ({ text }) => {
  return (
    <ButtonBig>
      <Span>{text}</Span>
      <Svg>
        <use href={sprite + `#icon-Ellipse-1`}></use>
      </Svg>
    </ButtonBig>
  );
};
