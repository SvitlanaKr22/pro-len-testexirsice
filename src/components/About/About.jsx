import { Div, Divflex, Par, H2, Span, UpLine } from './About.styled';
import { SpecialistsList } from '../SpecialistsList/SpecialistsList';
import imgAD from './../../images/png/andrii_duda.png';
import imgVD from './../../images/png/viktor_dunaev.png';
import imgVS from './../../images/png/vitalii_schevchenko.png';
import imgYT from './../../images/png/yurii_turchenko.png';

const listSpecialists = [
  {
    id: 1,
    foto: imgAD,
    flname: 'Andrii Duda',
    position: 'CEO',
  },
  {
    id: 2,
    foto: imgYT,
    flname: 'Yurii Turchenko',
    position: 'Technology officer',
  },
  {
    id: 3,
    foto: imgVS,
    flname: 'Vitalii Schevchenko',
    position: 'Director',
  },
  {
    id: 4,
    foto: imgVD,
    flname: 'Viktor Dunaev',
    position: 'Senior engineer',
  },
];

export const About = () => {
  return (
    <Div>
      <Divflex>
        <H2>LET’s start with small start with ourselves</H2>

        <UpLine />
        <Par>
          <Span>ecolution </Span>is the largest group of companies in Western
          Ukraine, which is engaged in the development and implementation of
          renewable environmentally friendly energy sources. We are the first
          privately owned company that received a loan from the European Bank
          for Reconstruction and Development (EBRD) and built the first wind
          farm in Western Ukraine. During the company's work, a number of
          projects in the field of energy were implemented. At the same time,
          new investment projects, in particular small hydropower and biofuels,
          are constantly being developed and developed with existing objects.
        </Par>
      </Divflex>
      <SpecialistsList list={listSpecialists} />
    </Div>
  );
};
//CSS Grid
