import React from 'react';
import Error from '../src/views/error';
import Head from 'next/head';

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pandora | Error</title>
      </Head>
      <Error />
    </>
  );
};

export default Page;
