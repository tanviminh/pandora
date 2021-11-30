import React from 'react';
import Home from '../src/views/home';
import Head from 'next/head';

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pandora | Home</title>
      </Head>
      <Home />
    </>
  );
};

export default Page;
