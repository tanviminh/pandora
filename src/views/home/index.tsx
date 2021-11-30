/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../footer';
import Games from './Games';
import Guide from './guide';
import Introduction from './Introduction';
import Partner from './Partner';
import Timeline from './roadmap';
import ScrollToElement from './ScrollToElement';
import Tokenomic from './Tokenomic';

const Home: React.FC = () => {
  return (
    <>
      <ScrollToElement />
      <Introduction />
      <Games />
      <Guide />
      <Tokenomic />
      <Timeline />
      <Partner />
      <Footer />
    </>
  );
};

export default Home;
