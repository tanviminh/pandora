import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import Base from './BaseButton';

const Action: React.FC = (props) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push('/games');
  }, [router]);
  return <Base src="/images/play-more.webp" onClick={handleClick} {...props} />;
};

export default React.memo(Action);
