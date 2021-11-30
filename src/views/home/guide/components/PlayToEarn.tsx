import { icPlayToEarn } from 'assets/images';
import { Image, Stack, Subtitle, Text } from 'components';
import React from 'react';
import ItemWrapper from './ItemWrapper';

const PlayToEarn = () => {
  return (
    <ItemWrapper>
      <Stack direction="row" spacing={8} sx={{ p: 4 }}>
        <Stack alignItems="center" justifyContent="center">
          <Image src={icPlayToEarn} height={120} />
          <Subtitle fontWeight="bold">PLAY TO EARN</Subtitle>
        </Stack>
        <Stack>
          <Text>
            - Daily Quest{'\n'}- Big Event{'\n'}- Vip Ranking Rewards{'\n'}- Tournament{'\n'}- Referal{'\n'}- Bounty
            program{'\n'}
          </Text>
        </Stack>
      </Stack>
    </ItemWrapper>
  );
};

export default React.memo(PlayToEarn);
