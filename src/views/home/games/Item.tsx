import React, { useCallback } from 'react';
import { styled, Button, Image, ButtonProps } from 'components';
import { ItemProps } from './types';
import { useRouter } from 'next/router';

const Wrapper = styled((props: ButtonProps) => {
  return <Button disableRipple {...props} />;
})`
  cursor: pointer;
  :hover {
    transform: scale(1.07);
    background: none;
  }
  :active {
    transform: scale(1);
  }
  transition: 0.4s;
  transform-origin: center;
`;

const Icon = styled(Image)`
  width: 80%;
`;

const Item: React.FC<ItemProps> = ({ src }) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push('/games');
  }, [router]);
  return (
    <Wrapper onClick={handleClick}>
      <Icon src={src} />
    </Wrapper>
  );
};

export default React.memo(Item);
