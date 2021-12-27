import { Image, Stack, Text, Title } from 'components';
import { useRouter } from 'next/router';
import React from 'react';
import data from 'assets/data/game.json';

const Information: React.FC = () => {
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
  const { title, icon, fullDescription } = game;

  return (
    <Stack spacing={10}>
      <Stack direction="row" spacing={4} alignItems="center">
        <Image src={icon} width={100} />
        <Title>{title}</Title>
      </Stack>
      <Text lineHeight={2}>{fullDescription}</Text>
    </Stack>
  );
};

export default React.memo(Information);
