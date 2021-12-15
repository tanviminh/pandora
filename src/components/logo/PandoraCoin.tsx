import { Stack, styled, Typography } from 'components';
import useDetectDevice from 'hooks/useDetect';
import React, { useMemo } from 'react';

const Padora = styled(Typography)`
  background-image: linear-gradient(to top, #b98e3c, #f3eab3), linear-gradient(to bottom, #9fc1ff, #9fc1ff);
  font-family: Roboto;

  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #9fc1ff;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const BoxText = styled(Typography)`
  font-family: Roboto;

  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fcfcfc;
`;

const PandoraBox = () => {
  const { isMobile } = useDetectDevice();
  const fontSize = useMemo(() => {
    if (isMobile) {
      return '4.7rem';
    }
    return '6rem';
  }, [isMobile]);
  return (
    <Stack>
      <Padora fontSize={fontSize}>PANDORA</Padora>
      <BoxText fontSize={fontSize}>COIN</BoxText>
    </Stack>
  );
};

export default React.memo(PandoraBox);
