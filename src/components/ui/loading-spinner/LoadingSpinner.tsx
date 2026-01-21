import { loadingSpinnerStyles as styles } from './LoadingSpinner.css';

interface Props {
  text?: string;
}

export function LoadingSpinner({ text = 'Loading...' }: Props) {
  return (
    <div className={styles.wrapper} role='status' aria-live='polite'>
      <div className={styles.spinner} aria-hidden='true' />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
