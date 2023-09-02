import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>
          Next Home Page
        </title>
        <meta name='home page' description='' />
      </Head>
      <h1>This is Home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}