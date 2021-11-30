import { icCoin, lightCoin } from 'assets/images';
import { Image, Stack, styled } from 'components';
import React from 'react';

const LightCoin = styled((props) => {
  return <Image src={lightCoin} width={720} height={720} {...props} />;
})`
  position: absolute;
  z-index: 0;
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  animation: rotate 5s linear infinite;
`;

const Coin: React.FC = () => {
  return (
    <Stack position="relative" width={140} height={140} alignItems="center" justifyContent="center">
      <LightCoin />
      <Image src={icCoin} width={140} height={140} style={{ zIndex: 2 }} />
    </Stack>
  );
};

export default React.memo(Coin);
