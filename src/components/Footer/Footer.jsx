import { Logo } from '../Header/Header.styled';
import {
  Div,
  Listsn,
  ButtonIcon,
  Line,
  Divflex,
  Par,
  BtnLink,
  Divpar,
} from './Footer.styled';
import sprite from './../../images/svg/sprite.svg';

export const Footer = () => {
  return (
    <Div>
      <Line />
      <Divflex>
        <Logo>
          <use href={sprite + `#icon-Group-1`}></use>
        </Logo>
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

        <BtnLink href="#main" aria-label="go to beginning">
          <svg width={16} height={16} aria-label="up arrow">
            <use href={sprite + `#icon-arrow-right2`}></use>
          </svg>
        </BtnLink>
      </Divflex>
      <Divpar>
        <Par>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Par>
        <Par>office@ecosolution.com</Par>
        <Par>ecosolution © 2023</Par>
      </Divpar>
    </Div>
  );
};

// export const Footer = () => {
//   return (
//     <Div>
//       <Line />
//       <Divflex>
//         <div>
//           <Logo>
//             <use href={sprite + `#icon-Group-1`}></use>
//           </Logo>
//           <Par>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Par>
//         </div>
//         <div>
//           <Listsn aria-label={'social media'}>
//             <ButtonIcon>
//               <svg width={24} height={24} fill="#173D33" stroke="#173D33">
//                 <use href={sprite + `#icon-facebook`}></use>
//               </svg>
//             </ButtonIcon>
//             <ButtonIcon>
//               <svg width={24} height={24} fill="#173D33" stroke="#173D33">
//                 <use href={sprite + `#icon-instagram`}></use>
//               </svg>
//             </ButtonIcon>
//           </Listsn>
//           <Par>office@ecosolution.com</Par>
//         </div>
//         <div>
//           <BtnLink href="#main" aria-label="go to beginning">
//             <svg
//               width={16}
//               height={16}
//               fill="#173D33"
//               stroke="#173D33"
//               aria-label="up arrow"
//             >
//               <use href={sprite + `#icon-arrow-right2`}></use>
//             </svg>
//           </BtnLink>
//           <Par>ecosolution © 2023</Par>
//         </div>
//       </Divflex>
//     </Div>
//   );
// };
