import { icArrow } from 'assets/images';
import { Image, Page, Stack, styled, PandoraToken } from 'components';
import React from 'react';
import Coin from './components/Coin';
import Item from './components/Item';
import PlayToEarn from './components/PlayToEarn';
import Wrapper from './components/Wrapper';

const Arrow = styled((props) => {
  return <Image src={icArrow} width={20} {...props} />;
})`
  z-index: 2;
`;

const Desktop: React.FC = () => {
  return (
    <Wrapper id="ecosystem">
      <Page overflow="hidden">
        <Stack spacing={4} sx={{ py: 10 }}>
          <PandoraToken />
          <Item type="play" />
          <Item type="trade" />
          <Item type="bounty" />

          <Stack spacing={4} alignItems="center">
            <Arrow />
            <Coin />
            <Arrow />
          </Stack>
          <PlayToEarn />
        </Stack>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Desktop);
