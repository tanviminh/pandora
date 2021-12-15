import { Box, styled, Stack } from 'components';
import React from 'react';
import How from './How';
import Info from './Info';
import Introduction from './Introduction';
import Footer from 'views/footer';
import { bgCoinToken } from 'assets/images';
import { BuyPandora } from 'components/actions';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  backgroundImage: `url(${bgCoinToken})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  position: 'relative',
});

const Buy = styled(BuyPandora)`
  @keyframes scaleAnimation {
    0 {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  :hover {
    animation: none;
  }
  animation: scaleAnimation 1s infinite;
`;

const Token: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Introduction />
        <Info />
        <How />
        <Stack alignItems="center" sx={{ pb: 20 }}>
          <Buy />
        </Stack>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Token;
