import { Grid, Image, Stack, Text } from 'components';
import React from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
}
const Item: React.FC<Props> = (props) => {
  const { title, description, image } = props;

  return (
    <Grid md={6} sm={12} item>
      <Stack direction="row" alignItems="center" spacing={10}>
        <Stack>
          <Image src={image} width={120} height={120} />
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
