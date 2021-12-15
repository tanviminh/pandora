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
    <Wrapper id="guide">
      <Page>
        <Stack spacing={4} sx={{ py: 10 }}>
          <PandoraToken />
          <Stack spacing={4} alignItems="center">
            <PlayToEarn />
            <Arrow />
            <Coin />
            <Arrow />
          </Stack>

          <Item type="play" />
          <Item type="trade" />
          <Item type="exchange" />
        </Stack>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Desktop);