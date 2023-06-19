import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './InputWithButton.module.scss';
import { TInput } from '../../types/TInput';

interface IProps extends TInput {
  button: ReactNode;
}

const InputWithButton: FC<IProps> = ({button, className = '', ...props}) => {
  return <div className={cn(styles.field, styles[className])}>
    <input className={cn(styles.input, styles[className])} {...props}/>
    {button}
  </div>;
};

export { InputWithButton };