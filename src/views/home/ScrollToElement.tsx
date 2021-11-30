import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import smoothScroll from 'utils/smoothScroll';
import { parseHash } from 'views/menu/helpers';
const ScrollToElement: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const element = document.getElementById(parseHash(router.pathname));
    if (!element) {
      return;
    }
    smoothScroll(element);
  }, [router]);
  return null;
};

export default React.memo(ScrollToElement);
