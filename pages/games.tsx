import React from 'react';
import Games from '../src/views/games';
import Head from 'next/head';

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pandora | Games</title>
      </Head>
      <Games />
    </>
  );
};

export default Page;
