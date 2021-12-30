import { Grid, Image, Stack, styled, Title } from 'components';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import data from './data.json';
const Wrapper = styled(Stack)({});

const ItemWrapper = styled(Stack)`
  border-radius: 16px;
  border: double 2px transparent;
  background-image: linear-gradient(to bottom, #000, #000), linear-gradient(to top, #ffc02f, #fff, #ffbb28);
  background-origin: border-box;
  background-clip: content-box, border-box;
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

// const Title = styled(Typography)`
//   position: absolute;
//   bottom: 20px;
//   left: 0;
//   right: 0;
//   margin: auto;
//   z-index: 1;
//   text-align: center;
//   font-size: 20px;
//   font-weight: bold;
// `;

const SkillCardGame: React.FC = () => {
  const router = useRouter();

  const handleClick = useCallback(
    (id) => {
      router.push(`/detail/${id}`);
    },
    [router],
  );
  return (
    <Wrapper>
      <Title>Skill & Card Game</Title>
      <Grid container spacing={4} mt={5}>
        {data.skills.map((item, index) => {
          return (
            <Grid
              key={index}
              item
              xs={6}
              md={3}
              lg={2}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <ItemWrapper>
                <Image className="background" width="100%" src={item.background} />
                {/* <Title>{item.title}</Title> */}
              </ItemWrapper>
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
};

export default React.memo(SkillCardGame);
