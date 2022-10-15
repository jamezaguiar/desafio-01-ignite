import styles from './DeleteButton.module.css';
import { Trash } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DeleteButton(props: DeleteButtonProps) {
  return (
    <button className={styles['delete-button']} {...props}>
      <Trash size={16} />
    </button>
  );
}
