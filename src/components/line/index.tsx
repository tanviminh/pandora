import { Box, styled, BoxProps } from 'components';

type Props = BoxProps;

const Line = styled((props: Props) => {
  const { width = '100%', height = '100%' } = props;
  return <Box height={height} width={width} sx={{ bgcolor: 'divider' }} {...props} />;
})({});

export default Line;
