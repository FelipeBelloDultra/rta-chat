// Packages
import { NavLink } from  'react-router-dom';

// Styles
import { BackButton, Header, NavGroup } from './styles';

// Resources
import routesInfos from '../../utils/routesInfos';

// Assets
import { FiChevronLeft, FiLogIn, FiUserPlus } from 'react-icons/fi';

export function HeaderLogin() {
  return (
    <Header>
      <div>
        <BackButton to={routesInfos.home.link}>
          <FiChevronLeft
            size={20}
          />

          Voltar
        </BackButton>

        <NavGroup>
          <NavLink
            to={routesInfos.login.link}
            activeClassName="active"
          >
            Entrar

            <FiLogIn
              size={20}
            />
          </NavLink>

          <NavLink
            to={routesInfos.register.link}
            activeClassName="active"
          >
            Criar conta

            <FiUserPlus
              size={20}
            />
          </NavLink>
        </NavGroup>
      </div>
    </Header>
  );
}
