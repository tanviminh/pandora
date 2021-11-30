import {
  bgHomeGames,
  icBitcoin,
  icBitcoinist,
  icChaser,
  icCoinfox,
  icCointurk,
  icCriptonaticias,
  icCrytocoins,
  icForklog,
  icSolar,
  icThemerkle,
} from 'assets/images';
import { Box, Image, Page, Stack, StackProps, styled } from 'components';
import React from 'react';

const Wrapper = styled(Box)({
  background: `url(${bgHomeGames})`,
});

const ContentWrapper = styled((props: StackProps) => {
  return <Stack direction="row" gap={10} justifyContent="center" sx={{ py: 20, flexWrap: 'wrap' }} {...props} />;
})({});

const Partner = () => {
  return (
    <Wrapper id="partner">
      <Page>
        <ContentWrapper>
          <Image src={icBitcoin} height={32} />
          <Image src={icChaser} height={32} />
          <Image src={icCointurk} height={32} />
          <Image src={icBitcoinist} height={32} />
          <Image src={icCoinfox} height={32} />
          <Image src={icCriptonaticias} height={32} />
          <Image src={icCrytocoins} height={32} />
          <Image src={icForklog} height={32} />
          <Image src={icSolar} height={32} />
          <Image src={icThemerkle} height={32} />
        </ContentWrapper>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Partner);
