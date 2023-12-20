import { ButtonLearnmore } from '../ButtonLearnmore/ButtonLearnmore';
import { Div, H1, Divpb, Par, Line, Parl, Divimg, Divbtn } from './Main.styled';
import img from './../../images/png/wind-turbine-from-aerial-view-sustainable-development-environment-friendly-renewable-energy-concept.png';
export const Main = () => {
  return (
    <Div id="main">
      <Divpb>
        <H1>renewable energy for any task</H1>
        <div>
          <Par>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Par>
          <Divbtn>
            <ButtonLearnmore />
          </Divbtn>
        </div>
      </Divpb>
      <Line />
      <Divpb>
        <Parl>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Parl>
        <Parl>office@ecosolution.com</Parl>
        <Parl>ecosolution © 2023</Parl>
      </Divpb>
      <Divimg
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundClip: 'border-box',
          backgroundOrigin: 'border-box',
        }}
      ></Divimg>
    </Div>
  );
};
