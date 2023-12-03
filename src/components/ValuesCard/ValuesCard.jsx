import { Line, Div, H3, Par, Divsh } from './ValuesCard.styled';

export const ValuesCard = ({ icon, title, text }) => {
  return (
    <Div>
      <Divsh>
        <svg width={18} height={18} stroke="#292D32">
          <use href={icon}></use>
        </svg>
        <H3>{title}</H3>
      </Divsh>
      <Line />
      <Par>{text}</Par>
    </Div>
  );
};
