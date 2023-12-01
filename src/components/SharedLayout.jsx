import { Container } from './SharedLayout.styled';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};
