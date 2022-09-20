import Head from 'next/head';
import Header from '@/components/HomePage/HomeHeader';
import styles from '@/styles/Home/HomeLayout.module.scss';

export default function HomeLayout({ children }) {
  return (
    < >
      <Head>
        <title>Dev dog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`home-container ${styles.container}`}>
        <main className={styles.mainContainer}>
          { children }
        </main>
        <footer className={styles.footer}>
          Created by leflores
        </footer>
      </div>
    </>
  );
}
