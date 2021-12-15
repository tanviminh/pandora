/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../footer';
import Guide from '../guide';
import Introduction from '../introduction';
import Tokenomic from '../tokenomic';
import Games from '../games';
import Partner from '../partner';
import Timeline from '../roadmap';
import ScrollToElement from './ScrollToElement';

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
