import React from 'react';
import { info } from 'utils/log';
import Base from './BaseButton';

const Action: React.FC = (props) => {
  return (
    <Base
      src="./images/buy-pan.webp"
      onClick={() => {
        info('click!');
      }}
      {...props}
    />
  );
};

export default React.memo(Action);
