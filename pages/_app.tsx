import Head from 'next/head';
import React from 'react';
import Menu from '../src/views/menu';
import Providers from '../src/Providers';
import './global.scss';

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="preload" href="/fonts/Colaborate-Regular.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Colaborate-Bold.otf" as="font" crossOrigin="" />
      </Head>
      <Providers>
        <Menu>
          <Component {...pageProps} />
        </Menu>
      </Providers>
    </React.Fragment>
  );
}

export default App;
