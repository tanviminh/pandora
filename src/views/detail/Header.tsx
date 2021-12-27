import React from 'react';
import { styled, Box, Page, Grid, Image } from 'components';
import { useRouter } from 'next/router';
import data from 'assets/data/game.json';
import useDetectDevice from 'hooks/useDetect';
const Wrapper = styled(Box)`
  position: relative;
  background-image: url('/images/game/bg-detail.webp');
  display: flex;
  align-items: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

const Left = styled(Image)`
  width: 90%;

  @keyframes animatedLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    50% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  animation: animatedLeft 1s;
`;

const Right = styled(Image)`
  width: 70%;
  @keyframes animatedRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  animation: animatedRight 0.5s;
`;

const Full = styled(Image)`
  width: 80%;
  height: 100%;
  @keyframes animatedFull {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  animation: animatedFull 0.5s;
`;

const Header: React.FC = () => {
  const { isMobile } = useDetectDevice();
  const { query } = useRouter();
  const ID = query.id;

  if (!ID) {
    return null;
  }

  const game = data.games.find((item) => {
    return item.id === Number(ID);
  });

  if (!game) {
    return null;
  }
  const { iconLeft, iconRight, iconFull } = game;
  if (isMobile) {
    return (
      <Wrapper>
        <Page sx={{ py: 30 }}>
          <Grid container alignItems="center" overflow="hidden" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
              <Left src={iconLeft} />
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
              <Right src={iconRight} />
            </Grid>
          </Grid>
        </Page>
      </Wrapper>
    );
  }
  return (
    <Wrapper sx={{}}>
      <Page display="flex" alignItems="center" justifyContent="center" sx={{ py: 30, height: '80vh' }}>
        <Full src={iconFull} />
      </Page>
    </Wrapper>
  );
};

export default React.memo(Header);
