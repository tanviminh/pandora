import React from 'react';
import { styled, Box, Page, Grid, Image } from 'components';
const Wrapper = styled(Box)`
  height: 70vh;
  background: #290249;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('/images/game/bg-games.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background
`;

const Left = styled(Image)`
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

  animation: animatedLeft 1.5s;
`;

const Right = styled(Image)`
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

  animation: animatedRight 1s;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Page>
        <Grid
          container
          alignItems="center"
          overflow="hidden"
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={5}
        >
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Left src="/images/game/ic-left-games.webp" width="90%" height="100%" />
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Right src="/images/game/ic-right-games.webp" width="100%" height="100%" />
          </Grid>
        </Grid>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Header);
