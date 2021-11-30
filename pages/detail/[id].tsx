import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

const Page: React.FC = () => {
  const { pathname, query } = useRouter();
  return (
    <>
      <Head>
        <title>Detail page</title>
      </Head>

      <>
        Detail Page {pathname} {JSON.stringify(query)}
      </>
    </>
  );
};

export default Page;
