import { bgTokenomic, icTokenomic } from 'assets/images';
import { Box, Image, Page, Stack, StackProps, styled, Title } from 'components';
import useDetectDevice from 'hooks/useDetect';
import React from 'react';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  background: `url(${bgTokenomic})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const TitleWrapper = styled((props: StackProps) => {
  return <Stack alignItems="center" justifyContent="center" spacing={2} {...props} />;
})({});

const Tokenomic = () => {
  const { isMobile } = useDetectDevice();
  return (
    <Wrapper id="tokenomics">
      <Page>
        <Stack spacing={20} sx={{ py: 10 }}>
          <TitleWrapper>
            <Title>TOKENOMICS</Title>
          </TitleWrapper>
          <Stack alignItems="center" justifyContent="center">
            <Image src={icTokenomic} width={isMobile ? '95%' : '60%'} />
          </Stack>
        </Stack>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Tokenomic);
