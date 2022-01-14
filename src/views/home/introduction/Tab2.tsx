import { Box, Grid, Page, Stack, styled, Subtitle, Title, Text, PandoraBox } from 'components';
import useDetectDevice from 'hooks/useDetect';
import dynamic from 'next/dynamic';
import React from 'react';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const AnimationWrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  margin: auto;
`;

const SpineAnimation = dynamic(() => import('./BackgroundAnimation'), {
  ssr: false,
});

const Introduction: React.FC = () => {
  const { isMobile } = useDetectDevice();
  if (isMobile) {
    return (
      <Wrapper>
        <Page sx={{ py: 10, zIndex: 1, position: 'relative' }}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Stack alignItems="center" spacing={5}>
                <PandoraBox />
                <Stack spacing={4} p={8} sx={{ bgcolor: '#00000080', borderRadius: 2 }} textAlign="center">
                  <Title sx={{ fontWeight: 'bold' }}>Play-to-earn in PANDOVERSE </Title>
                  <Subtitle>
                    Play and have fun in the metaverse casino . Trade NFT, earn PAN from exciting games
                  </Subtitle>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} width="100%" height="50vh" overflow="hidden">
              <SpineAnimation url="/animations/model2.json" />
            </Grid>
          </Grid>
        </Page>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <AnimationWrapper>
        <SpineAnimation url="/animations/model2.json" />
      </AnimationWrapper>
      <Page sx={{ py: 10, zIndex: 1, position: 'relative' }}>
        <Grid container>
          <Grid item md={4} spacing={5}>
            <PandoraBox />
            <Stack spacing={4} p={8} sx={{ bgcolor: '#00000080', borderRadius: 2 }}>
              <Subtitle sx={{ fontWeight: 'bold' }}>Play-to-earn in PANDOVERSE</Subtitle>
              <Text>Play and have fun in the metaverse casino . Trade NFT, earn PAN from exciting games</Text>
            </Stack>
          </Grid>
        </Grid>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Introduction);
