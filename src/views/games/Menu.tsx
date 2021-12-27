import { Box, ButtonBase, Image, Stack, styled, Text } from 'components';
import React, { Dispatch, SetStateAction } from 'react';
import data from 'assets/data/game.json';
import { GameType } from './types';

const Wrapper = styled(Box)`
  position: sticky;
  top: 140px;
`;

const Menu: React.FC<{ type: string; setType: Dispatch<SetStateAction<GameType>> }> = ({ type, setType }) => {
  return (
    <Wrapper sx={{ minWidth: { xs: 0, md: 240 } }}>
      <Stack alignItems="flex-start" spacing={4}>
        {data.menus.map((item, index) => {
          const { icon, title } = item;
          const active = type === item.type;
          return (
            <ButtonBase
              key={index}
              onClick={() => {
                if (item.type === type) {
                  return;
                }
                setType(item.type as GameType);
              }}
            >
              <Stack direction="row" alignItems="center" spacing={4} p={2} sx={{ opacity: active ? 1 : 0.5 }}>
                <Image src={icon} width={28} />
                <Text fontWeight="bold" sx={{ display: { xs: 'none', md: 'flex' } }}>
                  {title}
                </Text>
              </Stack>
            </ButtonBase>
          );
        })}
      </Stack>
    </Wrapper>
  );
};

export default Menu;
