import { Grid, Image, Stack, styled, Subtitle, Text, Title } from 'components';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import data from './data.json';

const Wrapper = styled(Stack)`
  text-align: left;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  background: white;
  border-radius: 20px;
  padding: 20px;
  :hover {
    transform: scale(1.04);
  }
`;

const Description = styled(Text)`
  /* max-height: 7em;
  line-height: 1.4em; */
  display: block;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  word-wrap: break-word;
`;

const Icon = styled(Image)`
  width: 100%;
`;
const HotCate: React.FC = () => {
  const router = useRouter();

  const handleClick = useCallback(
    (href: string) => {
      router.push(href);
    },
    [router],
  );

  return (
    <Stack>
      <Title>Hottest Category</Title>
      <Grid container sx={{ mt: 0 }} spacing={10}>
        {data.categories.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              md={6}
              sm={12}
              xs={12}
              onClick={() => {
                handleClick(item.href);
              }}
            >
              <Wrapper direction="row" spacing={5}>
                <Stack flex={1} spacing={4}>
                  <Stack flex={1} justifyContent="center" sx={{ bgcolor: '#00a7d9', p: 4, borderRadius: 4 }}>
                    <Subtitle fontWeight="bold">{item.title}</Subtitle>
                    <Description>{item.description}</Description>
                  </Stack>
                  <Grid container>
                    <Grid item xs={6}>
                      <Icon src={item.icon1} />
                    </Grid>
                    <Grid item xs={6}>
                      <Icon src={item.icon2} />
                    </Grid>
                  </Grid>
                </Stack>
                <Stack flex={1}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Icon src={item.icon3} />
                    </Grid>
                    <Grid item xs={6}>
                      <Icon src={item.icon4} />
                    </Grid>
                  </Grid>
                  <Icon src={item.icon5} />
                </Stack>
              </Wrapper>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default React.memo(HotCate);
