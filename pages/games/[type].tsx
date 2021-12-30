import Head from 'next/head';
import React from 'react';
import Game from '../../src/views/games';

const Page: React.FC = () => {
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
