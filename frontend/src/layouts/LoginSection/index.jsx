// Components
import { HeaderLogin } from '../../components/HeaderLogin';

// Styles
import { Container } from './styles';

export function LoginSection({ children }) {
  return (
    <>
      <HeaderLogin />

      <Container>{children}</Container>
    </>
  );
}
