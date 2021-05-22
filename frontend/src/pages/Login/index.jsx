// Components
import { Input } from '../../components/Input';

// Assets
import { FiLogIn } from 'react-icons/fi';

export function Login() {
  return (
    <div>
      <Input
        name="Email"
        icon={() =>
          <FiLogIn size={22} />
        }
      />
    </div>
  );
}
