import { FC } from 'react';
import cn from 'classnames';

import { TInput } from '../../types/TInput';
import styles from './Input.module.scss';


const Input: FC<TInput> = ({className = '', ...props}) => {
  return <input className={cn(styles.input, styles[className])} {...props}/>;
};

export { Input };