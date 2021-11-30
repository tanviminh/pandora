import { useMediaQuery } from 'components';

const useDetectDevice = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return { isMobile };
};

export default useDetectDevice;
