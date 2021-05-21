// Packages
import { Link, useHistory } from 'react-router-dom';

// Components
import { Button } from '../../components/Button';

// Resources
import routesInfos from '../../utils/routesInfos';

// Styles
import { Container, ButtonGroup } from './styles';

// Assets
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import phoneChatImg from '../../assets/phoneChat.svg';
import logoImg from '../../assets/logo.svg';

export function Home() {
  const history = useHistory();

  function navigateToLogin() {
    history.push(routesInfos.login.link);
  }

  return (
    <Container>
      <main>
        <img
          src={logoImg}
          alt="Logo"
          width="100"
          height="100"
        />

        <p>
          Bem vindo! <span>Conecte-se</span> com seus amigos e ganhe varias <br />
          horas de conversas muito boas com <span>alta eficiencia!</span>
        </p>

        <ButtonGroup>
          <Button onClick={navigateToLogin}>
            Entrar

            <FiLogIn size={20} />
          </Button>

          <Link to={routesInfos.register.link}>
            Criar conta

            <FiUserPlus size={16} />
          </Link>
        </ButtonGroup>
      </main>

      <aside>
        <img
          src={phoneChatImg}
          alt="Phone Chat"
        />
      </aside>
    </Container>
  );
}
