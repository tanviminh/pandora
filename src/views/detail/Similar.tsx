import { Grid, Image, Line, Stack, Subtitle, Text, ButtonBase, styled, Box } from 'components';
import React from 'react';

import data from 'assets/data/game.json';
import { shuffle } from 'lodash';
import { useRouter } from 'next/router';

const Button = styled(ButtonBase)`
  transition: 0.4s;
  :hover {
    transform: scale(1.1);
    border-radius: 10px;
  }
`;

const Similar: React.FC = () => {
  const router = useRouter();
  const index = data.games.findIndex((item) => {
    return item.id === Number(router.query.id);
  });
  const parseArr = [...data.games];
  if (index < 0) {
    return null;
  }
  parseArr.splice(index, 1);
  const arr = shuffle(parseArr);

  const subArr = arr.slice(0, 6);

  return (
    <Stack sx={{ mt: 5 }}>
      <Subtitle>Similar Games</Subtitle>
      <Line height={2} my={10} />
      <Box>
        <Grid container justifyContent="space-between" spacing={4}>
          {subArr.map((item, index) => {
            return (
              <Grid item key={index}>
                <Button
                  onClick={() => {
                    router.push(`/detail/${item.id}`);
                  }}
                  sx={{ p: 4 }}
                >
                  <Stack alignItems="center">
                    <Image src={item.icon} width={100} />
                    <Text>{item.title}</Text>
                  </Stack>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
};

export default React.memo(Similar);
