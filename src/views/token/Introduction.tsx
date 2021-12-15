import { icCoinToken } from 'assets/images';
import { Box, Grid, Image, Page, PandoraCoin, Stack, styled, Text } from 'components';
import React from 'react';

const WrapperIntroduction = styled(Box)({});

const AnimatedImage = styled(Image)({
  '@keyframes floating': {
    '0': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(30px)' },
    '100%': { transform: 'translateY(0)' },
  },
  animation: 'floating 5s ease-in-out infinite',
});
const Token: React.FC = () => {
  return (
    <WrapperIntroduction>
      <Page>
        <Grid container alignItems="center" sx={{ py: 10, minHeight: '100vh' }}>
          <Grid item md={5} sm={12}>
            <Stack spacing={10}>
              <PandoraCoin />
              <Stack>
                <Text>
                  The Pandora token pressures the whole ecosystem and is the single method of currency in the Pandora
                  marketplace.
                </Text>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={7} sm={12}>
            <Stack justifyContent="center" alignItems="center">
              <AnimatedImage src={icCoinToken} width="80%" />
            </Stack>
          </Grid>
        </Grid>
      </Page>
    </WrapperIntroduction>
  );
};

export default Token;
