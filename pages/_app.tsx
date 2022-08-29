import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps } : AppProps) {
  const [pageLoaded,setPageLoaded] = React.useState(false);

  React.useEffect(()=>{
    setPageLoaded(true);
  },[]);

  return (
    <>
      <div className={styles.container}>
        <a href="/" className={styles.h2beige}><p> 	&#10032; </p></a>
        { (pageLoaded) ?
          <Component {...pageProps} />
          : null
        }        
        <footer className={styles.footer}>
         &copy; <p><a href="/">  Jocelyne Murphy {new Date().getFullYear()} </a></p>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
