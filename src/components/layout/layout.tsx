import type { ReactNode } from 'react';

import { layoutStyles as styles } from './layout.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.headerText}>
          Repository search page with github
        </h2>
      </header>

      <section className={styles.section}>{children}</section>
    </main>
  );
}
