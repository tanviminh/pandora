import { bgHomeIntroduction, icHomeIntroduction } from 'assets/images';
import { Box, Grid, Image, Page, Stack, styled, Typography } from 'components';
import React from 'react';
import Bep20 from './components/Bep20';
import PandoraBox from './components/PandoraBox';
import Platform from './components/Platform';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  backgroundImage: `url(${bgHomeIntroduction})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
});
const AnimatedImage = styled(Image)({
  '@keyframes floating': {
    '0': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(30px)' },
    '100%': { transform: 'translateY(0)' },
  },
  animation: 'floating 5s ease-in-out infinite',
});

const Introduction = () => {
  return (
    <Wrapper>
      <Page>
        <Grid container alignItems="center" sx={{ minHeight: '100vh' }}>
          <Grid item md={5} sm={12} sx={{ py: 20 }}>
            <Stack justifyContent="center" spacing={12} sx={{}}>
              <PandoraBox />
              <Stack>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Own and trade your solar assets freely safely easily
                </Typography>
                <Typography>
                  Join one of the most rapidly growing industry and help to make this world greener
                </Typography>
              </Stack>

              <Platform />
              <Bep20 />
            </Stack>
          </Grid>
          <Grid item md={7} sm={12} sx={{}}>
            <Stack justifyContent="center" sx={{}}>
              <AnimatedImage src={icHomeIntroduction} width="100%" />
            </Stack>
          </Grid>
        </Grid>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Introduction);
