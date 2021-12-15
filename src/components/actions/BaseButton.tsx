import React from 'react';
import { styled, Button, Image, ButtonProps } from 'components';
import { ActionProps } from './types';

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
  height: 64px;
`;
const BaseAction = styled((props: ActionProps) => {
  return (
    <Wrapper {...props} onClick={props.onClick}>
      <Icon src={props.src} />
    </Wrapper>
  );
})``;

export default React.memo(BaseAction);
