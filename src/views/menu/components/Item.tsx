import { ButtonBase, Typography } from 'components';
import _ from 'lodash';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { parseHash } from '../helpers';

const Item: React.FC<{ title: string; href: string; onClose?: () => void }> = ({ title, href, onClose }) => {
  const router = useRouter();
  const active = _.isEqual(parseHash(router.pathname), parseHash(href));

  const handlePress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  return (
    <ButtonBase
      onClick={() => {
        if (onClose) {
          onClose();
        }
        handlePress();
      }}
      sx={{
        px: 4,
        py: 1,
        borderRadius: 2,
        bgcolor: active ? 'white' : 'transparent',
        transition: 'all 0.5s ease-out',

        '&:hover': {
          bgcolor: 'white',
          color: 'black',
        },
        '&:hover *': {
          color: 'black',
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: active ? 'black' : 'white',
          transition: 'all 0.5s ease-out',
        }}
      >
        {title}
      </Typography>
    </ButtonBase>
  );
};

export default Item;
