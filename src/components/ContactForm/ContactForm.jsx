import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Label,
  Field,
  Textarea,
  ErrorMessage,
  Button,
  Span,
} from './ContactForm.styled';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  number: Yup.string()
    .matches(
      /^(\+38|8)?0[0-9]{9}$/,
      'Incorrect format. Enter in format XXXXXXXXXXXX'
    )
    .required('Required'),
  message: Yup.string(),
});

const initialValues = {
  name: '',
  email: '',
  number: '',
  message: '',
};

export const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Full name:
          <Field
            type="text"
            name="name"
            title="Your name"
            placeholder="John Rosie"
            autoComplete="name"
          />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          E-mail:
          <Field
            type="email"
            name="email"
            title="Your email"
            placeholder="johnrosie@gmail.com"
            autoComplete="email"
          />
          <ErrorMessage name="email" component="div" />
        </Label>
        <Label>
          Phone:
          <Field
            type="tel"
            name="number"
            title="Your phone"
            placeholder="380961234567"
            // autocomplete="tel"
            autoComplete="tel"
          />
          <ErrorMessage name="number" component="div" />
        </Label>
        <Label>
          Message:
          <Textarea
            name="message"
            component="textarea"
            placeholder="Your message"
            autoComplete="off"
          />
        </Label>

        <Button type="submit">
          <Span>Sent</Span>
        </Button>
      </Form>
    </Formik>
  );
};
