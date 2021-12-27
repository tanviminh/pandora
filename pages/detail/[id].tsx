import Head from 'next/head';
import React from 'react';
// import { useRouter } from 'next/router';
import Game from '../../src/views/detail';

const Page: React.FC = () => {
  // const { pathname, query } = useRouter();
  return (
    <>
      <Head>
        <title>Game</title>
      </Head>

      <Game />
    </>
  );
};

export default Page;
