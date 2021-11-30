import React from 'react';
import NotFound from '../src/views/not-found';
import Head from 'next/head';

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pandora | 404</title>
      </Head>
      <NotFound />
    </>
  );
};

export default Page;
