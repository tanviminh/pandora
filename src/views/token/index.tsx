import { Box, styled } from 'components';
import React from 'react';
import How from './How';
import Info from './Info';
import Introduction from './Introduction';
import Footer from 'views/footer';

const Wrapper = styled(Box)`
  background-image: linear-gradient(to top, #1f5c9a, #7a9be3, #4e42a9);
`;

const Token: React.FC = () => {
  return (
    <Wrapper>
      <Introduction />
      <Info />
      <How />
      <Footer />
    </Wrapper>
  );
};

export default Token;
