import useDetectDevice from 'hooks/useDetect';
import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Guide: React.FC = () => {
  const { isMobile } = useDetectDevice();
  if (isMobile) {
    return <Mobile />;
  }
  return <Desktop />;
};

export default React.memo(Guide);
