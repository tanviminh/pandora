import { android, ios, window } from 'assets/images';
import { ButtonBase, Grid, Image, Stack, styled, Typography } from 'components';
import React, { useMemo } from 'react';

const Button = styled(ButtonBase)`
  box-shadow: 0.6px 0.8px 5px 0 rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(to right top, #894679, #f384cd, #894679);
  border-radius: 30px;
  min-width: 150px;
  object-fit: contain;
`;

interface Props {
  type: 'Android' | 'iOS' | 'PC';
}
const Item = (props: Props) => {
  const { type } = props;
  const icon = useMemo(() => {
    if (type === 'Android') {
      return android;
    }
    if (type === 'iOS') {
      return ios;
    }
    if (type === 'PC') {
      return window;
    }
  }, [type]);
  return (
    <Grid item xs="auto">
      <Button>
        <Stack direction="row" spacing={4} alignItems="center" sx={{ px: 6, py: 2 }}>
          <Image src={icon} width={20} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {type}
          </Typography>
        </Stack>
      </Button>
    </Grid>
  );
};

const PandoraBox = () => {
  return (
    <Grid container gap={2} sx={{ width: '100%' }}>
      <Item type="Android" />
      <Item type="iOS" />
      <Item type="PC" />
    </Grid>
  );
};

export default React.memo(PandoraBox);
