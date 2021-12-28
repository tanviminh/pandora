import { icArrow } from 'assets/images';
import { Image, Page, PandoraToken, Stack, styled } from 'components';
import React from 'react';
import Coin from './components/Coin';
import Item from './components/Item';
import PlayToEarn from './components/PlayToEarn';
import Wrapper from './components/Wrapper';

const Arrow = styled((props) => {
  return <Image src={icArrow} width={20} {...props} />;
})``;
// const ArrowLeft = styled(Arrow)`
//   transform: rotate(45deg);
// `;
// const ArrowRight = styled(Arrow)`
//   transform: rotate(-45deg); ;
// `;

const Desktop: React.FC = () => {
  return (
    <Wrapper id="guide">
      <Page>
        <Stack spacing={12} alignItems="center" sx={{ py: 10 }}>
          <PandoraToken />
          <Stack spacing={4} alignItems="center">
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Item type="play" />
              <Item type="trade" />
              <Item type="bounty" />
            </Stack>
            <Arrow />
            <Coin />

            <Stack spacing={4}>
              <Stack direction="row" justifyContent="space-around" spacing={4} width="100%">
                {/* <ArrowLeft /> */}
                <Arrow />
                {/* <ArrowRight /> */}
              </Stack>

              <PlayToEarn />
            </Stack>
          </Stack>
        </Stack>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Desktop);
