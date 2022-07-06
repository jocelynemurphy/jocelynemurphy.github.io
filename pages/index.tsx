import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import * as React from 'react';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome! I'm Joss.
        </h1>
        <p className={styles.description}>
          Check out these pages:{' '}
        </p>
        <p className={styles.code}>
          <Link href="/whyidowhatido">
            <a>why i do what i do</a>
          </Link>
        </p>
        <p className={styles.code}>
          <Link href="/whyidowhatido">
            <a>wall of shoutouts</a>
          </Link>
        </p>
        <p className={styles.code}>
          <Link href="/whyidowhatido">
            <a>resume</a>
          </Link>
        </p>
        <p className={styles.code}>
          <Link href="/whyidowhatido">
            <a>old website</a>
          </Link>
        </p>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <h1 className="title">
            Read{' '}
            <Link href="/whyidowhatido">
              <a>this page!</a>
            </Link>
          </h1>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  );
};

export default Home;
