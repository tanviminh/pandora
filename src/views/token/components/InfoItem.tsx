import { Token1Icon, Token2Icon, Token3Icon, Token4Icon } from 'assets/icons';
import { Grid, Stack, Text } from 'components';
import React, { useMemo } from 'react';

interface Props {
  title: string;
  description: string;
  index: number;
}
const Item: React.FC<Props> = (props) => {
  const { title, description, index } = props;
  const Icon = useMemo(() => {
    if (index === 0) {
      return Token1Icon;
    }
    if (index === 1) {
      return Token2Icon;
    }
    if (index === 2) {
      return Token3Icon;
    }
    if (index === 3) {
      return Token4Icon;
    }
  }, [index]);
  return (
    <Grid md={6} sm={12} item>
      <Stack direction="row" spacing={5}>
        <Stack>
          <Icon />
        </Stack>

        <Stack spacing={2}>
          <Text fontWeight="bold">{title}</Text>
          <Text>{description}</Text>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default React.memo(Item);
