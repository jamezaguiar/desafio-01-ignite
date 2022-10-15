import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" {...props} />
      </label>
    </div>
  );
}
