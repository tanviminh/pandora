import { Box, Grid, styled } from 'components';
import React, { useMemo } from 'react';
import Item from './Item';
import data from 'assets/data/game.json';
const Wrapper = styled(Box)({});

const List: React.FC<{ type: string }> = ({ type }) => {
  const games = useMemo(() => {
    if (type === 'all') {
      return data.games;
    }
    const arr = data.games.filter((item) => {
      return item.type === type;
    });
    if (arr.length === 0) {
      return data.games;
    }
    return arr;
  }, [type]);
  return (
    <Wrapper>
      <Grid container spacing={6}>
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

export default React.memo(List);
