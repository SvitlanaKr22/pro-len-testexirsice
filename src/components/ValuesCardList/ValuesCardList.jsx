import sprite from './../../images/svg/sprite.svg';
import imgmask from './../../images/png/mask group.png';
import imgwind from './../../images/png/wind-farms-fields.png';

import { ValuesCard } from '../ValuesCard/ValuesCard';
import { Div, Divcard, Img } from '../ValuesCardList/ValuesCardList.styled';

export const ValuesCardList = () => {
  return (
    <Div>
      <Divcard>
        <ValuesCard
          icon={sprite + `#icon-maximize-circle`}
          title={'Openness'}
          text={'to the world, people, new ideas and projects'}
        />
        <ValuesCard
          icon={sprite + `#icon-global-edit`}
          title={'Responsibility'}
          text={
            'we are aware that the results of our work have an impact on our lives and the lives of future generations'
          }
        />
      </Divcard>
      <Img
        src={`${imgwind}`}
        alt="specialists foto "
        numbercol={3}
        numberrow={1}
      />
      <Img
        src={`${imgmask}`}
        alt="specialists foto "
        numbercol={1}
        numberrow={2}
      />
      <Divcard>
        <ValuesCard
          icon={sprite + `#icon-cpu-charge`}
          title={'Innovation'}
          text={
            'we use the latest technology to implement non-standard solutions'
          }
        />
        <ValuesCard
          icon={sprite + `#icon-ranking`}
          title={'Quality'}
          text={
            'we do not strive to be the first among others, but we want to be the best in our business'
          }
        />
      </Divcard>
    </Div>
  );
};
