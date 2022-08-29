import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jocelyne Murphy</title>
      </Head>
      <main className={styles.main}>
        <p className={styles.title}>
          {`Welcome! I'm Joss.`}
        </p>
        <p className={styles.description}>
          For a current life update, check out
          <a className={styles.code} href="https://github.com/jocelynemurphy" target="_blank" rel="noreferrer">my github. </a> 
        </p>
        <p className={styles.description}>
          If you want to cut to the chase, 
          <a className={styles.code} href="./assets/jocelyne_murphy_software_resume.pdf" target="_blank">download my resume. </a> 
        </p>
        <p className={styles.description}>
          To get to know me, read about
          <a className={styles.code} href="/whyidowhatido">why I do what I do. </a> 
        </p>
        <p className={styles.description}>
          Learn more about my previous work by visiting my 
          <a className={styles.code} href="https://jocelynemurphy.ca/" target="blank">old website. </a> 
        </p>
        {/* <p className={styles.description}>
          Because no one does it alone, check out my
          <a className={styles.code} href="/whyidowhatido">shoutout wall. </a> 
        </p> */}
        <p className={styles.description}>
          Have a nice day!  &#x263B; 
        </p>
      </main>
    </>
  );
};

export default Home;
