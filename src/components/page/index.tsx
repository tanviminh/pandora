import { BoxProps } from '@mui/system';
import { Box, Container } from 'components';
import React from 'react';

const Page: React.FC<BoxProps> = (props) => {
  return (
    <Container maxWidth="xl">
      <Box {...props} />
    </Container>
  );
};

export default Page;
