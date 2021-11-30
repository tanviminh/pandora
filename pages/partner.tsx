import React from 'react';
import Home from '../src/views/home';
import Head from 'next/head';

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pandora | Partner</title>
      </Head>
      <Home />
    </>
  );
};

export default Page;
