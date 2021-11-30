import { bgHomeIntroduction } from 'assets/images';
import { Box, styled, Title } from 'components';
import React from 'react';

const Wrapper = styled(Box)({
  height: '100vh',
  backgroundImage: `url(${bgHomeIntroduction})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Introduction = () => {
  return (
    <Wrapper>
      <Title letterSpacing={12}>500 | NOT FOUND</Title>
    </Wrapper>
  );
};

export default React.memo(Introduction);
