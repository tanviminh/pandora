import { Stack, Grid, styled, Title } from 'components';
import React, { useMemo } from 'react';
import Item from '../Item';
import data from 'assets/data/game.json';
const Wrapper = styled(Stack)({});

const HightRTP: React.FC = () => {
  const games = useMemo(() => {
    const arr = data.games.filter((item) => {
      return item.id === 1 || item.id === 2 || item.id === 8;
    });

    return arr;
  }, []);
  return (
    <Wrapper>
      <Title>High RTP Game</Title>
      <Grid container spacing={6} mt={5}>
        {games.map((item, index) => {
          return (
            <Grid key={index} item xs={12} lg={4} md={6}>
              <Item {...item} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
};

export default React.memo(HightRTP);
