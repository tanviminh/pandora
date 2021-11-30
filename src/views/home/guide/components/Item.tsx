import { icBunny, icExchange, icPlayingGames } from 'assets/images';
import { Image, Stack, Subtitle } from 'components';
import React, { useMemo } from 'react';
import ItemWrapper from './ItemWrapper';

interface ItemProps {
  type: 'play' | 'trade' | 'exchange';
}

const Item = (props: ItemProps) => {
  const { type } = props;
  const { icon, title } = useMemo(() => {
    if (type === 'play') {
      return { icon: icPlayingGames, title: 'PLAYING GAMES' };
    }
    if (type === 'trade') {
      return { icon: icBunny, title: `TRADE ON PANCAKESWAP` };
    }
    if (type === 'exchange') {
      return { icon: icExchange, title: `EXCHANGE` };
    }
  }, [type]);
  return (
    <ItemWrapper flex={1}>
      <Stack direction="row" alignItems="center" spacing={8} sx={{ p: 8 }}>
        <Image src={icon} height={100} />
        <Subtitle fontWeight="bold" textAlign="center">
          {title}
        </Subtitle>
      </Stack>
    </ItemWrapper>
  );
};

export default React.memo(Item);
