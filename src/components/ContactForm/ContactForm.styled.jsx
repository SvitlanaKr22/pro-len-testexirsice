import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Field as FormikField } from 'formik';
import { ErrorMessage as FormikError } from 'formik';

export const Div = styled.div`
  background-color: #eaedf1;
  margin: 0 auto;
`;

export const Form = styled(FormikForm)`
  width: 100%;
  padding: 36px 0;
  border: none;
  font-size: 16px;
  color: #173d33;
  font-family: 'Fira Sans';
  font-weight: 300;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    padding: 48px 0;
    width: 596px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 28px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 48px;
    margin-right: 48px;
    margin-top: 12px;
    margin-bottom: 32px;
  }
`;

export const Field = styled(FormikField)`
  display: block;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #97d28b;
  color: inherit;
  font-family: inherit;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.04em;
  padding-top: 8px;

  @media screen and (min-width: 1280px) {
    padding-top: 12px;
    font-size: 20px;
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 12px;
  color: red;
`;

export const Textarea = styled(FormikField)`
  height: 147px;
  padding-top: 8px;
  font-size: 18px;
  outline: none;
  border: none;
  border-bottom: 1px solid #97d28b;
  color: inherit;
  background: transparent;
  font-family: inherit;
  font-weight: 300;
  letter-spacing: -0.04em;
  resize: none;

  @media screen and (min-width: 1280px) {
    padding-top: 12px;
    font-size: 20px;
    height: 149px;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 39px;
    border-radius: 500px;
    background-color: transparent;
    border: solid 1px #97d28b;
    margin-left: auto;
    margin-right: 24px;

    cursor: pointer;
    &:hover,
    &:focus {
      border-color: #97d28b;
      background-color: white;
      box-shadow: 0 0 0 3px #97d28b, 0 0 0 1.5px #97d28b;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-right: 48px;
  }
`;

export const Span = styled.span`
  display: inline-block;
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #173d33;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &:after {
    content: ' \\1F852';
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #97d28b;
    color: #173d33;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
