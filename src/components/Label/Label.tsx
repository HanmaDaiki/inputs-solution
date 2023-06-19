import { FC } from 'react';
import cn from 'classnames';

import { TLabel } from '../../types/TLabel';
import styles from './Label.module.scss';

const Label: FC<TLabel> = ({ className = '', children, ...props }) => {

  return <label className={cn(styles.label, styles[className])} {...props}>{children}</label>;
};

export { Label };
