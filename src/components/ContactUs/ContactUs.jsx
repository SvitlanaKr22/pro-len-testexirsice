import { ContactForm } from '../ContactForm/ContactForm';
import {
  Div,
  H2,
  Divcontact,
  Divflex,
  Svg,
  Parv,
  Part,
  Divt,
  Spanl,
  Listsn,
  ButtonIcon,
} from './ContactUs.styled';
import sprite from './../../images/svg/sprite.svg';

export const ContactUs = () => {
  return (
    <Div>
      <H2>contact us</H2>
      <Divflex>
        <Divcontact>
          <Spanl>Phone:</Spanl>
          <Divt>
            <Part>
              <Svg>
                <use href={sprite + `#icon-call`}></use>
              </Svg>
              38 (098) 12 34 567
            </Part>
            <Part>
              <Svg>
                <use href={sprite + `#icon-call`}></use>
              </Svg>
              38 (093) 12 34 567
            </Part>
          </Divt>
          <Spanl>E-mail:</Spanl>
          <Parv>
            <Svg>
              <use href={sprite + `#icon-sms`}></use>
            </Svg>
            office@ecosolution.com
          </Parv>
          <Spanl>Adress:</Spanl>
          <Parv>
            <Svg>
              <use href={sprite + `#icon-map`}></use>
            </Svg>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </Parv>
          <Spanl>Social Networks:</Spanl>
          <Listsn aria-label={'social media'}>
            <ButtonIcon>
              <svg width={24} height={24} fill="#173D33" stroke="#173D33">
                <use href={sprite + `#icon-facebook`}></use>
              </svg>
            </ButtonIcon>
            <ButtonIcon>
              <svg width={24} height={24} fill="#173D33" stroke="#173D33">
                <use href={sprite + `#icon-instagram`}></use>
              </svg>
            </ButtonIcon>
          </Listsn>
        </Divcontact>
        <ContactForm />
      </Divflex>
    </Div>
  );
};
