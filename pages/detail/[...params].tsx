import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Page: React.FC = () => {
  const { pathname, query } = useRouter();

  return (
    <>
      <Head>
        <title>Detail page</title>
      </Head>
      Detail Page {pathname} {JSON.stringify(query)}
    </>
  );
};

export default Page;
