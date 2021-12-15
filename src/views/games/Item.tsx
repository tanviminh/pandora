import React from 'react';
import { styled, Button, Image, ButtonProps } from 'components';
import { ItemProps } from './types';

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

const Item: React.FC<ItemProps> = ({ src, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon src={src} />
    </Wrapper>
  );
};

export default React.memo(Item);
