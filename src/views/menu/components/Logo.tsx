import { logo } from 'assets/images';
import { Image, styled } from 'components';

const Logo = styled(() => {
  return <Image src={logo} width={68} />;
})({});

export default Logo;
