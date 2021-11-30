import { icBattery, icFacebook, icReddit, icStay, icTalk, icTelegram, icTwitter } from 'assets/images';
import {
  Box,
  ButtonBase,
  ButtonBaseProps,
  Grid,
  GridProps,
  IconButton,
  Image,
  Line,
  Page,
  Stack,
  StackProps,
  styled,
  Subtitle,
  Text,
  Title,
  LogoWhite,
} from 'components';
import React from 'react';

const Wrapper = styled(Box)({
  backgroundColor: '#242936',
});

const SocialWrapper = styled(Box)({
  backgroundColor: '#1e222d',
});

const Button = styled((props: ButtonBaseProps) => {
  return <ButtonBase sx={{ p: 4 }} {...props} />;
})({});

const GridWrapper = styled((props: GridProps) => {
  return <Grid spacing={20} container sx={{ py: 10 }} {...props} />;
})({});

const GridItem = styled((props: StackProps) => {
  return (
    <Grid item sm={12} md={3}>
      <Stack spacing={5} alignItems="center" textAlign="center" {...props} />
    </Grid>
  );
})({});

const Icon = styled((props: any) => {
  return <Image height={48} width={48} {...props} />;
})``;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Page>
        <Stack direction="row" alignItems="flex-end" justifyContent="space-between" sx={{ py: 10 }}>
          <LogoWhite />
          <Stack direction="row" spacing={4}>
            <Button>
              <Text>About</Text>
            </Button>
            <Button>
              <Text>Blog</Text>
            </Button>
            <Button>
              <Text>Sitemap</Text>
            </Button>
          </Stack>
        </Stack>
        <Line height={2} />
        <GridWrapper>
          <Grid item sm={12} md={3}>
            <Stack spacing={5}>
              <Title>Lorem ipsum dolor sit amet</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam,
              </Text>
            </Stack>
          </Grid>
          <GridItem>
            <Icon src={icBattery} />
            <Subtitle>Want More?</Subtitle>
            <Text>amet, consectetur adipisicing elit, sed do eiusmod</Text>
          </GridItem>

          <GridItem>
            <Icon src={icTalk} />
            <Subtitle>Talk to Us?</Subtitle>
            <Text>amet, consectetur adipisicing elit, sed do eiusmod</Text>
          </GridItem>

          <GridItem>
            <Icon src={icStay} />
            <Subtitle>Stay in Touch?</Subtitle>
            <Text>amet, consectetur adipisicing elit, sed do eiusmod</Text>
          </GridItem>
        </GridWrapper>
      </Page>
      <SocialWrapper>
        <Page>
          <GridWrapper>
            <Grid item sm={12} md={6}>
              <Stack spacing={5}>
                <Stack direction="row" spacing={5}>
                  <ButtonBase>
                    <Text>ABOUT US</Text>
                  </ButtonBase>
                  <ButtonBase>
                    <Text>ADVERTISE</Text>
                  </ButtonBase>
                  <ButtonBase>
                    <Text>POLICY</Text>
                  </ButtonBase>
                  <ButtonBase>
                    <Text>BLOG</Text>
                  </ButtonBase>
                </Stack>
                <Text>© 2021 copyright pandora</Text>
              </Stack>
            </Grid>
            <Grid item sm={12} md={6}>
              <Stack direction="row" justifyContent="flex-end" spacing={1}>
                <IconButton>
                  <Icon src={icFacebook} />
                </IconButton>
                <IconButton>
                  <Icon src={icTwitter} />
                </IconButton>
                <IconButton>
                  <Icon src={icTelegram} />
                </IconButton>
                <IconButton>
                  <Icon src={icReddit} />
                </IconButton>
              </Stack>
            </Grid>
          </GridWrapper>
        </Page>
      </SocialWrapper>
    </Wrapper>
  );
};

export default React.memo(Footer);
