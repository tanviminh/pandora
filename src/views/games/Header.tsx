import React from 'react';
import { styled, Box } from 'components';
const Wrapper = styled(Box)({
  height: '70vh',
  background: '#290249',
  position: 'relative',
});

const Header: React.FC = () => {
  return <Wrapper />;
};

export default React.memo(Header);
