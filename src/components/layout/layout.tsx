import type { ReactNode } from 'react';
import { layoutStyles as styles } from './Layout.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>graphql search page</header>

      <section className={styles.section}>{children}</section>
    </main>
  );
}
