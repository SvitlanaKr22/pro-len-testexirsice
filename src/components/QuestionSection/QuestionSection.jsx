import { useState } from 'react';
import faq from './faq.json';
import {
  Div,
  Line,
  Par,
  Paran,
  H2,
  Divg,
  Divbtn,
  List,
  Btn,
  Divflex,
  Divb,
} from './QuestionSection.styled';
import { Button } from './../Button/Button';
import sprite from './../../images/svg/sprite.svg';

export const QuestionSection = () => {
  const [whatShow, setWhatShow] = useState(faq[0].id);
  const [isShow, setIsShow] = useState(true);

  const onOpen = id => {
    if (whatShow !== id) {
      setWhatShow(id);
      setIsShow(true);
    } else isShow ? setIsShow(false) : setIsShow(true);
  };

  return (
    <Div>
      <Divg>
        <H2>Frequently Asked Questions</H2>
        <List>
          {faq.map(({ id, question, answer }) => (
            <li key={id}>
              <Line />
              <Divflex onClick={() => onOpen(id)}>
                <Btn>
                  {whatShow === id && isShow ? (
                    <svg
                      width={24}
                      height={24}
                      stroke=" #97d28b"
                      fill=" #97d28b"
                    >
                      <use href={sprite + `#icon-minus`}></use>
                    </svg>
                  ) : (
                    <svg
                      width={24}
                      height={24}
                      stroke=" #97d28b"
                      fill=" #97d28b"
                    >
                      <use href={sprite + `#icon-plus`}></use>
                    </svg>
                  )}
                </Btn>
                <Par>{question}</Par>
              </Divflex>
              {whatShow === id && isShow && <Paran>{answer}</Paran>}
            </li>
          ))}
        </List>
        <Divbtn>
          <Par>Didn't find the answer to your question?</Par>
          <Divb>
            <Button text={'Contact Us'} />
          </Divb>
        </Divbtn>
      </Divg>
    </Div>
  );
};
