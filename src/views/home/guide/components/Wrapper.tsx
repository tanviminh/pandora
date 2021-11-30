import { bgHomeGuide } from 'assets/images';
import { Box, styled } from 'components';

export default styled(Box)({
  minHeight: '100vh',
  background: `url(${bgHomeGuide})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});
