import { ValuesCardList } from '../ValuesCardList/ValuesCardList';
import { Div, Divflex, H2, UpLine, Par } from '../Values/Values.styled';

export const Values = () => {
  return (
    <Div>
      <Divflex>
        <H2>Main values of our company</H2>
        <UpLine />
        <Par>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </Par>
      </Divflex>
      <ValuesCardList />
    </Div>
  );
};
