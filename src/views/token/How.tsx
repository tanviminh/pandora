import { Page, Stack } from 'components';
import React from 'react';
import HowItem from './components/HowItem';
import data from './data.json';

const Token: React.FC = () => {
  return (
    <Page>
      <Stack spacing={10} sx={{ py: 20 }}>
        {data.earns.map((item, index) => {
          return <HowItem key={index} title={item.title} description={item.description} />;
        })}
      </Stack>
    </Page>
  );
};

export default Token;
