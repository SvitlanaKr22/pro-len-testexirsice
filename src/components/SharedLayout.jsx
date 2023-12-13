import { Container } from './SharedLayout.styled';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { About } from './About/About';
import { QuestionSection } from './QuestionSection/QuestionSection';
import { ContactUs } from './ContactUs/ContactUs';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main />
      <About />
      <QuestionSection />
      <ContactUs />
    </Container>
  );
};
