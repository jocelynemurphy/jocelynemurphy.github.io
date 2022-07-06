import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
        &copy; <p>  Jocelyne Murphy {new Date().getFullYear()} </p>
      </footer>
    </ChakraProvider>
  );
  
}

export default MyApp;
