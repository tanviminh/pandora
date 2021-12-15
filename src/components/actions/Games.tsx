import React from 'react';
import { info } from 'utils/log';
import Base from './BaseButton';

const Games: React.FC = () => {
  return (
    <Base
      src="./images/games.webp"
      onClick={() => {
        info('click!');
      }}
    />
  );
};

export default React.memo(Games);
