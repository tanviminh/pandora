import { Box, Stack, styled, Image, Text, ButtonBase, Grow } from 'components';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

const Wrapper = styled(ButtonBase)`
  border-radius: 16px;
  height: 100%;
  width: 100%;
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
      transform: scale(1.1);
    }
  }
  .background {
    transition: 0.5s;
  }
`;

const Background = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const ContentBackground = styled(Box)`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 0;
`;

interface Props {
  id: number;
  href: string;
  title: string;
  description: string;
  background: string;
  icon: string;
  informations: Array<{ key: string; value: string }>;
  color: string;
  index: number;
}

const Item: React.FC<Props> = (props) => {
  const router = useRouter();
  const [render, setRender] = useState(false);
  const { title, description, background, informations, icon, color, index, id } = props;

  useEffect(() => {
    setRender(true);
  }, []);

  const handleClick = useCallback(() => {
    router.push(`/detail/${id}`);
  }, [id, router]);

  if (!render) {
    return null;
  }

  const delay = index * 100;
  return (
    <Grow in={true} key={id} style={{ transitionDelay: `${delay}ms` }}>
      <Wrapper onClick={handleClick}>
        <Stack sx={{ position: 'relative', height: '100%', width: '100%' }}>
          <Stack sx={{ height: 400, overflow: 'hidden' }}>
            <Background className="background" src={background} />
          </Stack>

          <Stack sx={{ zIndex: 1, position: 'relative', py: 12, px: 4, flex: 1 }}>
            <ContentBackground sx={{ backgroundImage: `linear-gradient(${color}CC, ${color})` }} />
            <Stack spacing={8}>
              <Stack direction="row" zIndex={1} spacing={4}>
                <Image src={icon} height={72} />
                <Stack>
                  <Text fontWeight="bold">{title}</Text>
                  <Text variant="body2">{description}</Text>
                </Stack>
              </Stack>

              <Stack direction="row" zIndex={1} spacing={4} justifyContent="space-around">
                {informations.map((item, index) => {
                  return (
                    <Stack key={index} textAlign="center">
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
