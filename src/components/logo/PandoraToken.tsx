import { Stack, styled, Typography } from 'components';
import React from 'react';

const Padora = styled(Typography)`
  background-image: linear-gradient(to top, #b98e3c, #f3eab3), linear-gradient(to bottom, #9fc1ff, #9fc1ff);
  font-family: Roboto;
  font-size: 2rem;
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
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fcfcfc;
`;

const PandoraBox = () => {
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <Padora>PANDORA</Padora>
      <BoxText>TOKEN</BoxText>
    </Stack>
  );
};

export default React.memo(PandoraBox);
