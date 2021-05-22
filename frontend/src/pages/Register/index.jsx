// Packages
import { useState } from 'react';

// Components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Styles
import { Contianer, ButtonShowPassowrd, InputGroup } from './styles';

// Assets
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiUserPlus } from 'react-icons/fi';

export function Register() {
  const [showPassword, setShowPassword] = useState(false);

  function seePassword() {
    setShowPassword(prev => !prev);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log('Register');
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
            placeholder="John Doe"
            labelText="Insira seu nome"
            name="name"
            type="text"
            leftIcon={() =>
              <FiUser size={22} />
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

        <div>
          <Input
            placeholder="Digite novamente sua senha"
            labelText="Confirme sua senha"
            name="repeat-password"
            type="password"
            leftIcon={() =>
              <FiLock size={22} />
            }
          />
        </div>
      </InputGroup>

      <Button
        type="submit"
        className="button-login"
      >
        Criar minha conta

        <FiUserPlus size={20} />
      </Button>

    </Contianer>
  );
}
