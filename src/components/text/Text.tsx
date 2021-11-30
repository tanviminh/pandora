import { styled, Typography, TypographyProps } from 'components';

const Text = styled((props: TypographyProps) => {
  const { sx, ...otherProps } = props;
  return <Typography variant="body1" {...otherProps} sx={{ whiteSpace: 'pre-wrap', ...sx }} />;
})({});

export default Text;
