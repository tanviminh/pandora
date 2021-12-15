import { bgIntroduction, icIntroduction } from 'assets/images';
import { Box, Grid, Image, Page, PandoraBox, Slide, Stack, styled, Subtitle, Text } from 'components';
import { Android, BuyPandora, Games, IOS, Window } from 'components/actions';
import useDetectDevice from 'hooks/useDetect';
import React from 'react';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  backgroundImage: `url(${bgIntroduction})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const Introduction: React.FC = () => {
  const { isMobile } = useDetectDevice();
  return (
    <Wrapper>
      <Page sx={{ py: 10 }}>
        <Grid container alignItems="center">
          <Grid item md={5} sm={12} sx={{ py: 20 }}>
            <Slide direction="right" in={true} style={{ transitionDelay: '2000ms' }}>
              <Stack justifyContent="center" spacing={12} sx={{}}>
                <PandoraBox />
                <Stack spacing={4}>
                  <Subtitle sx={{ fontWeight: 'bold' }}>Gamble transparently with crypto</Subtitle>
                  <Text>Join one of the most rapidly growing industry and help to make this world greener.</Text>
                </Stack>
                <Grid container spacing={0} justifyContent={isMobile ? 'center' : 'flex-start'}>
                  <Games />
                  <BuyPandora />
                </Grid>
              </Stack>
            </Slide>
          </Grid>
          <Grid item md={7} sm={12} sx={{}}>
            <Stack justifyContent="center">
              <Image src={icIntroduction} width="100%" />
            </Stack>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={4} sx={{ mt: 10 }}>
          <Android />
          <IOS />
          <Window />
        </Grid>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Introduction);
