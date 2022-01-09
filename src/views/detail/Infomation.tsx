import data from 'assets/data/game.json';
import { Image, Stack, Text, Title } from 'components';
import { useRouter } from 'next/router';
import React from 'react';
import TableView from './TableView';

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
  const { title, icon, hows, description } = game;

  return (
    <Stack spacing={10}>
      <Stack direction="row" spacing={4} alignItems="center">
        <Image src={icon} width={100} />
        <Title>{title}</Title>
      </Stack>
      <Text lineHeight={2}>{description}</Text>
      <Stack spacing={2}>
        <Title>➥ How to play</Title>

        {hows &&
          hows.map((item, index) => {
            if (item.type === 'text') {
              return (
                <Text key={index} lineHeight={2}>
                  {item.content}
                </Text>
              );
            }
            if (item.type === 'array') {
              return <TableView data={item.content} />;
            }
            return null;
          })}
      </Stack>
    </Stack>
  );
};

export default React.memo(Information);
