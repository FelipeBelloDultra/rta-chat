// Packages
import { Link } from 'react-router-dom';

// Resources
import routesInfos from '../../utils/routesInfos';

export function Login() {
  return (
    <div>
      <h1>Login</h1>

      <Link to={routesInfos.register.link}>Ir para o registro</Link>
    </div>
  );
}
