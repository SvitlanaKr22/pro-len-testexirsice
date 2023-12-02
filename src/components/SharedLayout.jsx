import { Container } from './SharedLayout.styled';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { About } from './About/About';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main />
      <About />
    </Container>
  );
};
