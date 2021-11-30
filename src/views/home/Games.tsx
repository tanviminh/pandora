import { bgHomeGames, icHomeGames } from 'assets/images';
import { Box, Grid, GridProps, Image, Page, Stack, StackProps, styled, Subtitle, Title } from 'components';
import React from 'react';
import Try from './components/Try';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  background: `url(${bgHomeGames})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const TitleWrapper = styled((props: StackProps) => {
  return <Stack alignItems="center" justifyContent="center" {...props} />;
})({});

const GridWrapper = styled((props: GridProps) => {
  return <Grid container alignItems="center" {...props} />;
})({});

const LeftItem = styled((props: GridProps) => {
  return <Grid item md={8} sm={12} alignItems="center" justifyContent="center" {...props} />;
})({});

const RightItem = styled((props: StackProps) => {
  return (
    <Grid item md={4} sm={12}>
      <Stack spacing={10} {...props} />
    </Grid>
  );
})({});

const Games = () => {
  return (
    <Wrapper id="games">
      <Page>
        <Stack spacing={8} sx={{ py: 10 }}>
          <TitleWrapper>
            <Title color="black">GAMES</Title>
            <Subtitle color="text.disabled">Slot Machine $ Table Games</Subtitle>
          </TitleWrapper>
          <GridWrapper>
            <LeftItem>
              <Image src={icHomeGames} width="90%" />
            </LeftItem>
            <RightItem>
              <Subtitle color="text.disabled">
                We focus on developing friendly, popular games to player throughout the world.
              </Subtitle>
              <Subtitle color="text.disabled">
                Types of Games include:{'\n'}- Slot Machine{'\n'}- Card Games{'\n'}- Table Games{'\n'}- Sport Betting
                {'\n'}- Tournament Poker{'\n'}
              </Subtitle>
              <Subtitle color="text.disabled">
                These types have very high RTP ~98% and allow player becoming dealer with tiny rake
              </Subtitle>
              <Try />
            </RightItem>
          </GridWrapper>
        </Stack>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Games);
