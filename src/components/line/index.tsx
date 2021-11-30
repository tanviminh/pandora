import { Box, styled } from 'components';

interface Props {
  width?: number | string;
  height?: number | string;
}

const Line = styled((props: Props) => {
  const { width = '100%', height = '100%' } = props;
  return <Box height={height} width={width} sx={{ bgcolor: 'divider' }} />;
})({});

export default Line;
