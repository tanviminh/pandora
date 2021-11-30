import React from 'react';
import Token from '../src/views/token';
import Head from 'next/head';

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pandora | Token</title>
      </Head>
      <Token />
    </>
  );
};

export default Page;
