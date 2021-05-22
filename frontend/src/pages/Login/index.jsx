// Packages
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Components
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

// Styles
import { Contianer, ButtonShowPassowrd, InputGroup } from './styles';

// Assets
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi';

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('O campo e-mail é obrigatório')
    .email('Insira um e-mail válido'),
  password: yup
    .string()
    .required('O campo senha é obrigatório'),
});

export function Login() {
  // States
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  // Functions
  function seePassword() {
    setShowPassword(prev => !prev);
  }

  function handleSubmitLogin(values, event) {
    event.preventDefault();

    console.log(values);
  }

  return (
    <Contianer onSubmit={handleSubmit(handleSubmitLogin)}>

      <InputGroup>
        <div>
          <Input
            error={errors?.email}
            placeholder="john@doe.com..."
            labelText="Insira seu melhor e-mail"
            name="email"
            ref={register}
            leftIcon={() =>
              <FiMail size={22} />
            }
          />
        </div>

        <div>
          <Input
            error={errors?.password}
            placeholder="Digite sua senha"
            labelText="Insira sua senha"
            name="password"
            type={showPassword ? 'text' : 'password'}
            ref={register}
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
