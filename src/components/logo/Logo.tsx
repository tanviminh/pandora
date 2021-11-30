import { logo } from 'assets/images';
import { IconButton, Image, styled } from 'components';
import { useRouter } from 'next/router';

const Logo = styled((props) => {
  const router = useRouter();
  return (
    <IconButton
      onClick={() => {
        router.push('/');
      }}
    >
      <Image src={logo} width={64} height={64} {...props} />
    </IconButton>
  );
})``;

export default Logo;
