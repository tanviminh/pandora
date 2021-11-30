import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  const { fill = 'white' } = props;
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill={fill}
        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"
      />
      <path d="M0 0h48v48h-48z" fill="none" />
    </svg>
  );
};

export default React.memo(Icon);
