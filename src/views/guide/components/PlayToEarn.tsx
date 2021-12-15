import { Grid, Image, Stack, Text } from 'components';
import React from 'react';
import ItemWrapper from './ItemWrapper';
import data from '../data.json';

const PlayToEarn = () => {
  return (
    <Stack spacing={4}>
      <Text alignSelf="center" fontWeight="bold">
        PLAY TO EARN
      </Text>
      <ItemWrapper>
        <Grid container justifyContent="center" sx={{ px: 4 }}>
          {data.map((item, index) => {
            return (
              <Grid item key={index}>
                <Stack alignItems="center" justifyContent="center" spacing={4} sx={{ p: 4 }}>
                  <Image src={item.src} height={100} width={100} />
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
