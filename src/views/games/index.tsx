import data from 'assets/data/game.json';
import { Box, Page, Stack, styled, Title } from 'components';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import Footer from 'views/footer';
import Header from './Header';
import Hot from './hot';
import List from './List';
import Menu from './Menu';

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
  const { query } = useRouter();
  const type = (query.type as string) || 'hot';

  const title = useMemo(() => {
    let game = data.menus.find((item) => {
      return item.type === type;
    });
    if (!game) {
      game = data.menus[0];
    }
    return game.title;
  }, [type]);

  // useEffect(() => {
  //   const title = document.getElementById('game-title');
  //   if (!title) {
  //     return;
  //   }

  //   title.scrollIntoView({ behavior: 'smooth' });
  // }, [query]);

  return (
    <Wrapper>
      <Header />
      <Page>
        <Stack direction="row" alignItems="flex-start" spacing={5} sx={{ py: 20 }}>
          <Menu type={type} />
          {type === 'hot' ? (
            <Hot />
          ) : (
            <Stack spacing={10} flex={1}>
              <TitleAnimated id="game-title" key={type}>
                {title}
              </TitleAnimated>
              <List type={type} />
            </Stack>
          )}
        </Stack>
      </Page>
      <Footer />
    </Wrapper>
  );
};

export default React.memo(Games);
