import { Title, Stack, Grid, ButtonBase, styled, Image, Text } from 'components';
import React, { useCallback } from 'react';
import data from 'assets/data/game.json';
import { useRouter } from 'next/router';

const Wrapper = styled(Stack)`
  text-align: left;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    .background {
      transform: scale(1.2);
    }
  }
  .background {
    transition: 0.5s;
  }
`;
const BannerWrapper = styled(ButtonBase)`
  border-radius: 16px;
  border: double 2px transparent;
  background-image: linear-gradient(to bottom, #000, #000), linear-gradient(to top, #ffc02f, #fff, #ffbb28);
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const Description = styled(Text)`
  /* max-height: 4.2em;
  line-height: 1.4em; */
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;
const HotGame: React.FC = () => {
  const router = useRouter();

  const arr = data.games
    .filter((item) => {
      return item.id === 13 || item.id === 2;
    })
    .reverse();

  const handleClick = useCallback(
    (id: number) => {
      router.push(`/detail/${id}`);
    },
    [router],
  );

  return (
    <Stack>
      <Title>Hot Game</Title>
      <Grid container sx={{ mt: 0 }} spacing={10}>
        {arr.map((game, index) => {
          return (
            <Grid
              item
              key={index}
              md={6}
              sm={12}
              xs={12}
              onClick={() => {
                handleClick(game.id);
              }}
            >
              <Wrapper spacing={5}>
                <BannerWrapper>
                  <Image className="background" src={game.banner} width="100%" />
                </BannerWrapper>
                <Stack direction="row" spacing={4}>
                  <Image src={game.icon} width={100} height={100} />
                  <Stack>
                    <Text fontWeight="bold" fontSize={20}>
                      {game.title}
                    </Text>
                    <Description>{game.description}</Description>
                  </Stack>
                </Stack>
              </Wrapper>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default React.memo(HotGame);
