import { Div, Img, List, Par, Span } from './SpecialistsList.styled';

export const SpecialistsList = ({ list }) => {
  return (
    <Div>
      <List>
        {list.map(({ id, foto, flname, position }) => (
          <li key={id}>
            <Img src={`${foto}`} alt="specialist foto " />

            <Par>{`${flname}`}</Par>
            <Span>{`${position}`}</Span>
          </li>
        ))}
      </List>
    </Div>
  );
};
