import { Grid, Page } from 'components';
import React from 'react';
import InfoItem from './components/InfoItem';
import data from './data.json';

const Token: React.FC = () => {
  return (
    <Page sx={{ py: 10 }}>
      <Grid container spacing={20}>
        {data.items.map((item, index) => {
          return <InfoItem key={index} {...item} />;
        })}
      </Grid>
    </Page>
  );
};

export default Token;
