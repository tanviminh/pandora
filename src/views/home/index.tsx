/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../footer';
import Guide from './guide';
import Introduction from './introduction';
import Tokenomic from './tokenomic';
import Games from './games';
import Partner from './partner';
import Timeline from './roadmap';
import ScrollToElement from './ScrollToElement';
import { Line, styled } from 'components';

const LineStyled = styled(() => {
  return <Line height={3} sx={{ bgcolor: 'primary.main' }} />;
})``;
const Home: React.FC = () => {
  return (
    <>
      <ScrollToElement />
      <Introduction />
      <LineStyled />
      <Games />
      <LineStyled />
      <Guide />
      <LineStyled />
      <Tokenomic />
      <LineStyled />
      <Timeline />
      <LineStyled />
      <Partner />
      <LineStyled />
      <Footer />
    </>
  );
};

export default Home;
