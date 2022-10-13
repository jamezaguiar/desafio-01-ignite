import { ButtonHTMLAttributes } from 'react';
import styles from './CreateButton.module.css';

interface CreateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateButton({ children, ...props }: CreateButtonProps) {
  return (
    <button className={styles['create-button']} {...props}>
      {children}
    </button>
  );
}
