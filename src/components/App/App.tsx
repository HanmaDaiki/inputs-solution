import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';

import { Input } from '../Input';
import { Label } from '../Label';
import { FieldInput } from '../FieldInput';
import { InputWithButton } from '../InputWithButton';

import styles from './App.module.scss';
import { ErrorForInput } from '../ErrorForInput';

const App: FC = () => {
  const { register, formState } = useForm({ mode: 'onBlur' });
  const { errors } = formState;

  const [showPassword, toggleShowPassword] = useState(false);

  return (
    <div className={styles.app}>
      <form className={styles['test-form']}>
        <FieldInput>
          <Label>Электронная почта</Label>
          <Input
            {...register('email', { required: 'Обязательное поле' })}
            name='email'
            type='email'
            placeholder='example@gmail.com'
          />
          {errors.email && <ErrorForInput error={errors.email} />}
        </FieldInput>

        <FieldInput>
          <Label>
            Пароль <button type='button' className={styles.remember}>Забыли пароль?</button>
          </Label>
          <InputWithButton
            {...register('password', { required: 'Обязательное поле' })}
            name='password'
            button={
              <button
                type='button'
                className={cn(styles.eye, showPassword && styles.active)}
                onClick={() => toggleShowPassword(!showPassword)}
              ></button>
            }
            type={showPassword ? 'text' : 'password'}
            placeholder='Введите пароль'
          />
          {errors.password && <ErrorForInput error={errors.password} />}
        </FieldInput>

        <FieldInput>
          <InputWithButton
            {...register('profile-name', { required: 'Обязательное поле' })}
            name='profile-name'
            button={<button type='button' className={styles.clear}></button>}
            className='profile'
            placeholder='Имя'
          />
          {errors['profile-name'] && <ErrorForInput error={errors['profile-name']} />}
        </FieldInput>
      </form>
    </div>
  );
};

export { App };
