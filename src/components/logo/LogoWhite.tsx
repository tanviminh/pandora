import { logoWhite } from 'assets/images';
import { IconButton, Image, styled } from 'components';
import { useRouter } from 'next/router';

interface Props {
  width?: number;
  height?: number;
}
const Logo = styled((props: Props) => {
  const { width = 64, height = 64 } = props;
  const router = useRouter();
  return (
    <IconButton
      onClick={() => {
        router.push('/');
      }}
    >
      <Image src={logoWhite} width={width} height={height} {...props} />
    </IconButton>
  );
})``;

export default Logo;
