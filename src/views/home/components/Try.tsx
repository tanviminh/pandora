import { ButtonBase, styled, Text } from 'components';
import React from 'react';

const Button = styled(ButtonBase)`
  box-shadow: 0.6px 0.8px 5px 0 rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(to top right, #2ec17e, #3cddaa);
  padding: 12px;
  border-radius: 100px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  @keyframes leaves {
    0% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.95);
    }
  }
  animation: leaves 3s infinite;
`;

const Content = styled(Text)`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Try: React.FC = () => {
  return (
    <Button>
      <Content>Try Now for Free</Content>
    </Button>
  );
};

export default React.memo(Try);
