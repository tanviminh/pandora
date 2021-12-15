import { Box, Image, Page, Stack, StackProps, styled } from 'components';
import React from 'react';
import data from './data.json';

const Wrapper = styled(Box)`
  background-color: #1c170a;
`;

const ContentWrapper = styled((props: StackProps) => {
  return <Stack direction="row" gap={10} justifyContent="center" sx={{ py: 20, flexWrap: 'wrap' }} {...props} />;
})({});

const Partner = () => {
  return (
    <Wrapper id="partner">
      <Page>
        <ContentWrapper>
          {data.map((item, index) => {
            return <Image src={item} height={32} key={index} />;
          })}
        </ContentWrapper>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Partner);
