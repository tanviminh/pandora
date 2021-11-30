import Timeline from '@mui/lab/Timeline';
import { bgTimeline } from 'assets/images';
import { Box, Page, Stack, StackProps, styled, Title } from 'components';
import React from 'react';
import Item from './components/Item';
import data from './data.json';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  background: `url(${bgTimeline})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const TitleWrapper = styled((props: StackProps) => {
  return <Stack alignItems="center" justifyContent="center" {...props} />;
})({});

const Roadmap = () => {
  return (
    <Wrapper id="roadmap">
      <Page>
        <Stack spacing={12} sx={{ py: 10 }}>
          <TitleWrapper>
            <Title>ROADMAP</Title>
          </TitleWrapper>
          <Stack>
            <Timeline position="alternate">
              {data.data.map((item, index) => {
                return <Item data={{ item, index }} key={index} />;
              })}
            </Timeline>
          </Stack>
        </Stack>
      </Page>
    </Wrapper>
  );
};

export default React.memo(Roadmap);
