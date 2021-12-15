import { bgGames } from 'assets/images';
import { Box, Grid, GridProps, Page, Stack, styled, Title } from 'components';
import { PlayNow } from 'components/actions';
import React from 'react';
import data from './data';
import Item from './Item';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  backgroundImage: `url(${bgGames})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const Play = styled(PlayNow)`
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

const ItemWrapper = styled((props: GridProps) => {
  return <Grid item alignItems="center" justifyContent="center" display="flex" md={4} {...props} />;
})``;

const Games: React.FC = () => {
  return (
    <Wrapper id="games">
      <Page>
        <Stack alignItems="center" spacing={10} sx={{ py: 20 }}>
          <Title fontWeight="bold">GAMES</Title>
          <Grid container justifyContent="center">
            {data.map((item, index) => {
              return (
                <ItemWrapper key={index}>
                  <Item {...item} />
                </ItemWrapper>
              );
            })}
          </Grid>
          <Play />
        </Stack>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Games);
