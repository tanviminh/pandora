import { Stack, StackProps, styled, Typography } from 'components';
import _ from 'lodash';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { parseHash } from '../helpers';
const Button = styled((props: StackProps) => {
  return <Stack alignItems="center" justifyContent="center" sx={{ px: 4, py: 1 }} {...props} />;
})`
  position: relative;
  border-radius: 100px;
  height: 40px;
  cursor: pointer;
  :hover {
    border: 2px solid white;
    background: #0000001c;
  }
  transition: 0.4s;
`;

const Item: React.FC<{ title: string; href: string; onClose?: () => void }> = ({ title, href, onClose }) => {
  const router = useRouter();
  const active = _.isEqual(parseHash(router.pathname), parseHash(href));

  const handlePress = useCallback(() => {
    router.push(href);
  }, [href, router]);
  return (
    <Button
      onClick={() => {
        if (onClose) {
          onClose();
        }
        handlePress();
      }}
      sx={{ border: active ? '2px solid #ac7410' : '2px solid transparent', background: active ? '#0000003e' : 'none' }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};

export default Item;
