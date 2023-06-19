import { FC } from 'react';
import cn from 'classnames';

import { TFieldIntput } from '../../types/TFieldIntput';
import styles from './FieldInput.module.scss';


const FieldInput: FC<TFieldIntput> = ({ className = '', children, ...props}) => {
  return <div className={cn(styles['field-input'], styles[className])} {...props}>{children}</div>;
};

export { FieldInput };