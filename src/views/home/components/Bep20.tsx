import { Stack, Typography, styled, TypographyProps, StackProps, Link } from 'components';
import useDetectDevice from 'hooks/useDetect';
import React, { useMemo } from 'react';
import { formatAddress } from 'utils/format';

const ItemWrapper = styled((props: StackProps) => {
  return (
    <Stack alignItems="flex-start">
      <Stack direction="row" spacing={8} sx={{ bgcolor: '#0000003A', p: 4 }} {...props} />
    </Stack>
  );
})({});

const Text = styled((props: TypographyProps) => {
  return <Typography variant="body1" sx={{ fontWeight: 'bold' }} {...props} />;
})({});
const LinkBSC = styled((props: TypographyProps) => {
  const { isMobile } = useDetectDevice();
  const addr = useMemo(() => {
    if (isMobile) {
      return formatAddress(address, 20);
    }
    return address;
  }, [isMobile]);
  return (
    <Link
      underline="none"
      href={`https://bscscan.com/token/${props.children}`}
      target="_blank"
      sx={{
        '&:hover *': {
          color: 'primary.main',
          transition: 'all 0.5s ease-out',
        },
        transition: 'all 0.5s ease-out',
      }}
    >
      <Text>{addr}</Text>
    </Link>
  );
})({});

const address = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
const Bep20 = () => {
  return (
    <Stack spacing={1}>
      <ItemWrapper>
        <Text>BEP20</Text>
        <LinkBSC>{address}</LinkBSC>
      </ItemWrapper>
      <ItemWrapper>
        <Text>BEP20</Text>
        <LinkBSC>{address}</LinkBSC>
      </ItemWrapper>
    </Stack>
  );
};

export default React.memo(Bep20);
