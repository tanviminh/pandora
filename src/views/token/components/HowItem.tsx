import { Stack, Subtitle, Text } from 'components';
import React from 'react';

interface Props {
  title: string;
  description: string;
}
const Item: React.FC<Props> = (props) => {
  const { title, description } = props;
  return (
    <Stack spacing={2}>
      <Subtitle fontWeight="bold">{title}</Subtitle>
      <Text>{description}</Text>
    </Stack>
  );
};

export default React.memo(Item);
