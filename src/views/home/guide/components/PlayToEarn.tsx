import { Grid, Image, Stack, Text } from 'components';
import React from 'react';
import data from '../data.json';
import ItemWrapper from './ItemWrapper';

const PlayToEarn = () => {
  return (
    <Stack spacing={4}>
      <ItemWrapper>
        <Grid container justifyContent="center" sx={{ px: 4 }}>
          {data.map((item, index) => {
            return (
              <Grid item key={index}>
                <Stack alignItems="center" justifyContent="center" spacing={4} sx={{ p: 4 }}>
                  <Image src={item.src} height={80} width={80} />
                  <Text>{item.title}</Text>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </ItemWrapper>
    </Stack>
  );
};

export default React.memo(PlayToEarn);
