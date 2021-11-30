import { styled, Typography, TypographyProps } from 'components';

const Subtitle = styled((props: TypographyProps) => {
  const { sx, ...otherProps } = props;
  return <Typography variant="h5" {...otherProps} sx={{ whiteSpace: 'pre-wrap', ...sx }} />;
})({});

export default Subtitle;
