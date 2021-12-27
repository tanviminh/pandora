import { Stack, Container, styled } from 'components';
import React from 'react';
import Footer from 'views/footer';
import Header from './Header';
import Information from './Infomation';
import Phone from './Phone';
import Similar from './Similar';

const Wrapper = styled(Stack)({
  background: '#160722',
  position: 'relative',
});

const Game: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Container sx={{ py: 20 }}>
        <Information />
        <Phone />
        <Similar />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default React.memo(Game);
