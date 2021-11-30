import useDetectDevice from 'hooks/useDetect';
import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Menu: React.FC = (props) => {
  const { isMobile } = useDetectDevice();
  if (isMobile) {
    return <Mobile {...props} />;
  }
  return <Desktop {...props} />;
};

export default Menu;
