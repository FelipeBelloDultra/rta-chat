// Packages
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookie from 'js-cookie';
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
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
});

export function Login() {
  // States
  const [showPassword, setShowPassword] = useState(false);
  const emailDefaultValue = Cookie.get('userEmailRegistred');

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  // Effects
  useEffect(() => {
    return () => {
      Cookie.remove('userEmailRegistred');
    }
  }, []);

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
            labelText={emailDefaultValue ? 'E-mail cadastrado' : 'Insira seu e-mail cadastrado'}
            name="email"
            ref={register}
            defaultValue={emailDefaultValue || ''}
            leftIcon={() =>
              <FiMail size={22} />
            }
          />
        </div>

        <div>
          <Input
            error={errors?.password}
            placeholder="Digite sua senha"
            labelText="Insira sua senha cadastrada"
            name="password"
            type={showPassword ? 'text' : 'password'}
            ref={register}
            leftIcon={() =>
              <FiLock size={22} />
            }
            rightIcon={() =>
              <ButtonShowPassowrd
                tabIndex="-1"
                type="button"
                onClick={seePassword}
              >
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
