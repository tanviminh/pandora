import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Stack, styled, Subtitle, Text, TypographyProps } from 'components';
import React from 'react';
import data from '../data.json';
import { ItemProps } from '../types';

const Dot = styled((props: TypographyProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 60,
        height: 60,
        backgroundImage: `url(${'/images/ic-roadmap.webp'})`,
        backgroundSize: 'contain',
      }}
    >
      <Subtitle
        color="white"
        fontWeight="bold"
        fontSize={24}
        sx={{ WebkitTextStroke: '2px rgba(40, 37, 26, 0.32)' }}
        {...props}
      />
    </Stack>
  );
})({});

const Item: React.FC<ItemProps> = (props) => {
  const { item, index } = props.data;
  const { phase, title, subtitle, description } = item;

  const isLast = data.data.length - 1 === index;
  return (
    <TimelineItem key={index}>
      <TimelineOppositeContent>
        <Text>{description}</Text>
      </TimelineOppositeContent>
      <TimelineSeparator sx={{ minHeight: 120 }}>
        <Dot>{phase}</Dot>
        {!isLast && <TimelineConnector sx={{ width: 6, bgcolor: 'white' }} />}
      </TimelineSeparator>
      <TimelineContent>
        <Subtitle color="primary.main" fontWeight="bold">
          {title}
        </Subtitle>
        <Text fontWeight="bold">{subtitle}</Text>
      </TimelineContent>
    </TimelineItem>
  );
};

export default React.memo(Item);
