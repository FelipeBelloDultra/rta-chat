// Packages
import { useState } from 'react';

// Components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Styles
import { Contianer, ButtonShowPassowrd, InputGroup } from './styles';

// Assets
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function seePassword() {
    setShowPassword(prev => !prev);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log('Login');
  }

  return (
    <Contianer onSubmit={handleSubmit}>

      <InputGroup>
        <div>
          <Input
            placeholder="john@doe.com..."
            labelText="Insira seu melhor e-mail"
            name="e-mail"
            type="text"
            leftIcon={() =>
              <FiMail size={22} />
            }
          />
        </div>

        <div>
          <Input
            placeholder="Digite sua senha"
            labelText="Insira sua senha"
            name="password"
            type={showPassword ? 'text' : 'password'}
            leftIcon={() =>
              <FiLock size={22} />
            }
            rightIcon={() =>
              <ButtonShowPassowrd type="button" onClick={seePassword}>
                {showPassword ?  <FiEyeOff size={22} /> : <FiEye size={22} />}
              </ButtonShowPassowrd>
            }
          />
        </div>
      </InputGroup>

      <Button
        type="submit"
        className="button-login"
      >
        Entrar

        <FiLogIn size={20} />
      </Button>

    </Contianer>
  );
}
