import { Stack, styled, Typography } from 'components';
import useDetectDevice from 'hooks/useDetect';
import React, { useMemo } from 'react';

const Padora = styled(Typography)`
  font-family: Roboto;

  object-fit: contain;
  background-image: linear-gradient(to top, #b75e37, #ffe0b3, #f1d565), linear-gradient(to bottom, #9fc1ff, #9fc1ff);
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
}
`;
const BoxText = styled(Typography)`
  object-fit: contain;
  background-image: linear-gradient(to top, #b9b9b9, #fff, #f5f5f5), linear-gradient(to bottom, #fcfcfc, #fcfcfc);
  font-family: Roboto;

  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fcfcfc;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PandoraBox = () => {
  const { isMobile } = useDetectDevice();
  const fontSize = useMemo(() => {
    if (isMobile) {
      return '3rem';
    }
    return '6rem';
  }, [isMobile]);
  return (
    <Stack direction="row" spacing={2}>
      <Padora fontSize={fontSize}>PANDORA</Padora>
      <BoxText fontSize={fontSize}>BOX</BoxText>
    </Stack>
  );
};

export default React.memo(PandoraBox);
