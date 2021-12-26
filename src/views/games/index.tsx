import { Box, Page, Stack, styled, Title } from 'components';
import React, { useMemo, useState } from 'react';
import Footer from 'views/footer';
import Header from './Header';
import List from './List';
import Menu from './Menu';
import { GameType } from './types';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  background: '#160722',
  position: 'relative',
});

const TitleAnimated = styled(Title)`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn linear 0.4s;
`;

const Games: React.FC = () => {
  const [type, setType] = useState<GameType>('ALL');

  const title = useMemo(() => {
    if (type === 'ALL') {
      return 'All Games';
    }
    if (type === 'SLOT') {
      return 'Slot Machine';
    }
    if (type === 'TABLE') {
      return 'Table Game';
    }
    if (type === 'SKILL') {
      return 'Skill Game';
    }
    if (type === 'CARD') {
      return 'Card Game';
    }
    if (type === 'MINI') {
      return 'Mini Game';
    }
  }, [type]);
  return (
    <Wrapper>
      <Header />
      <Page>
        <Stack direction="row" alignItems="flex-start" spacing={5} sx={{ my: 20 }}>
          <Menu type={type} setType={setType} />
          <Stack spacing={10} flex={1}>
            <TitleAnimated key={type}>{title}</TitleAnimated>

            <List type={type} />
          </Stack>
        </Stack>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default React.memo(Games);
