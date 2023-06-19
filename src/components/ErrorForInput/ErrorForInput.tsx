import { FC } from 'react';
import cn from 'classnames';

import { TInputForError } from '../../types/TErrorForInput';
import styles from './ErrorForInput.module.scss';


const ErrorForInput: FC<TInputForError> = ({className = '', error, ...props}) => {
  return <span className={cn(styles.error, styles[className])} {...props}>
    {error && `${error.message}`}
  </span>;
};

export { ErrorForInput };