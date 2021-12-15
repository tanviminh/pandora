import React from 'react';
import { info } from 'utils/log';
import Base from './BaseButton';

const Action: React.FC = () => {
  return (
    <Base
      src="./images/android.webp"
      onClick={() => {
        info('click!');
      }}
    />
  );
};

export default React.memo(Action);
