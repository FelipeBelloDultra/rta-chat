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
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiUserPlus } from 'react-icons/fi';

const loginFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('O campo nome é obrigatório'),
  email: yup
    .string()
    .required('O campo e-mail é obrigatório')
    .email('Insira um e-mail válido'),
  password: yup
    .string()
    .required('O campo senha é obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
});

export function Register() {
  // States
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  // Functions
  function seePassword() {
    setShowPassword(prev => !prev);
  }

  function handleSubmitRegister(values, event) {
    event.preventDefault();

    console.log(values);
  }

  return (
    <Contianer onSubmit={handleSubmit(handleSubmitRegister)}>

      <InputGroup>
        <div>
          <Input
            error={errors?.email}
            placeholder="john@doe.com..."
            labelText="Insira seu melhor e-mail"
            name="email"
            ref={register}
            type="text"
            leftIcon={() =>
              <FiMail size={22} />
            }
          />
        </div>

        <div>
          <Input
            error={errors?.name}
            placeholder="John Doe"
            labelText="Insira seu nome"
            name="name"
            ref={register}
            type="text"
            leftIcon={() =>
              <FiUser size={22} />
            }
          />
        </div>

        <div>
          <Input
            error={errors?.password}
            placeholder="Digite sua senha"
            labelText="Insira sua senha"
            name="password"
            ref={register}
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
            error={errors?.confirmPassword}
            placeholder="Digite novamente sua senha"
            labelText="Confirme sua senha"
            name="confirmPassword"
            ref={register}
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
