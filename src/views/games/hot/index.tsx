import React from 'react';
import { Stack } from 'components';
import HotGame from './HotGame';
import HotCate from './HotCate';
import SkillCardGame from './SkillCardGame';
import HighRTP from './HighRTP';

const Hot: React.FC = () => {
  return (
    <Stack spacing={20} flex={1}>
      <HotGame />
      <HotCate />
      <SkillCardGame />
      <HighRTP />
    </Stack>
  );
};

export default React.memo(Hot);
