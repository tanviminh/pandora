import { styled, Typography, TypographyProps } from 'components';

const Title = styled((props: TypographyProps) => {
  const { sx, ...otherProps } = props;
  return <Typography variant="h4" {...otherProps} sx={{ fontWeight: 'bold', ...sx }} />;
})({});

export default Title;
