import { Box, Stack, styled, Image, Text, ButtonBase, Grow } from 'components';
import React, { useEffect, useState } from 'react';

const Wrapper = styled(ButtonBase)`
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

const Background = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  z-index: 0;
`;

const ContentBackground = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  z-index: 0;
`;

interface Props {
  id: number;
  href: string;
  title: string;
  description: string;
  background: string;
  icon: string;
  infomations: Array<{ key: string; value: string }>;
  color: string;
  index: number;
}

const Item: React.FC<Props> = (props) => {
  const [render, setRender] = useState(false);
  const { title, description, background, infomations, icon, color, index, id } = props;

  useEffect(() => {
    setRender(true);
  }, []);

  if (!render) {
    return null;
  }

  const delay = index * 100;
  return (
    <Grow in={true} key={id} style={{ transitionDelay: `${delay}ms` }}>
      <Wrapper>
        <Stack sx={{ paddingTop: '80%', position: 'relative' }}>
          <Background className="background" src={background} />
          <Stack sx={{ p: 4 }}></Stack>
          <Stack sx={{ zIndex: 1, position: 'relative', py: 12, px: 4 }}>
            <ContentBackground sx={{ backgroundImage: `linear-gradient(${color}CC, ${color})` }} />
            <Stack spacing={8}>
              <Stack direction="row" zIndex={1} spacing={4}>
                <Image src={icon} height={72} />
                <Stack>
                  <Text fontWeight="bold">{title}</Text>
                  <Text variant="body2">{description}</Text>
                </Stack>
              </Stack>

              <Stack direction="row" zIndex={1} spacing={4} justifyContent="space-between">
                {infomations.map((item, index) => {
                  return (
                    <Stack key={index}>
                      <Text fontWeight="bold">{item.key}</Text>
                      <Text variant="body2">{item.value}</Text>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Wrapper>
    </Grow>
  );
};

export default Item;
