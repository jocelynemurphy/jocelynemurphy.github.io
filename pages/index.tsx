import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
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
          This site is a work in progress — learn more about my previous work by visiting my 
          <a className={styles.code} href="https://jocelynemurphy.ca/" target="blank">old website. </a> 
        </p>
        {/* <p className={styles.description}>
          Read about
          <a className={styles.code} href="/whyidowhatido">why I do what I do. </a> 
        </p> */}
        {/* <p className={styles.description}>
          Because no one does it alone, check out my
          <a className={styles.code} href="/whyidowhatido">wall of shoutouts. </a> 
        </p> */}
        {/* <p className={styles.description}>
          If you want to cut to the chase, 
          <a className={styles.code} href="/whyidowhatido">download my resume. </a> 
        </p> */}
        <p className={styles.description}>
          Have a nice day!  &#x263B;
        </p>
      </main>
    </>
  );
};

export default Home;
