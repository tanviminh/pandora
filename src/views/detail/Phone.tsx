import { Grid, Image, Stack, Subtitle, Text } from 'components';
import { useRouter } from 'next/router';
import React from 'react';
import data from 'assets/data/game.json';

const Phone: React.FC = () => {
  const { query } = useRouter();
  const ID = query.id;

  if (!ID) {
    return null;
  }

  const game = data.games.find((item) => {
    return item.id === Number(ID);
  });

  if (!game) {
    return null;
  }
  const { informations, gameType, phone } = game;
  return (
    <Grid container alignItems="center" spacing={20} mt={5}>
      <Grid item xs={12} md={6}>
        <Stack spacing={10}>
          <Stack>
            <Text>Game Type</Text>
            <Subtitle>{gameType}</Subtitle>
          </Stack>

          <Stack direction="row" zIndex={1} spacing={4} justifyContent="space-between">
            {informations.map((item, index) => {
              return (
                <Stack key={index}>
                  <Text fontWeight="bold">{item.key}</Text>
                  <Text variant="body2">{item.value}</Text>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image src={phone} width="100%" />
      </Grid>
    </Grid>
  );
};

export default React.memo(Phone);
