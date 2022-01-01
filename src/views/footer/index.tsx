import { facebook, reddit, telegram, twitter } from 'assets/images';
import {
  Box,
  ButtonBase,
  Grid,
  IconButton,
  Image,
  Line,
  LogoWhite,
  Page,
  Stack,
  styled,
  Subtitle,
  Text,
} from 'components';
import React from 'react';

const Wrapper = styled(Box)({
  backgroundColor: '#120911',
});

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Page>
        <Grid container alignItems="center" spacing={4} sx={{ py: 5 }}>
          <Grid item>
            <LogoWhite width={36} />
          </Grid>
          <Grid item>
            <Subtitle>Follow us</Subtitle>
          </Grid>
          <Grid item>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item>
                <IconButton>
                  <Image src={facebook} width={60} height={60} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Image src={twitter} width={60} height={60} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Image src={telegram} width={60} height={60} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Image src={reddit} width={60} height={60} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Line height={2} />

        <Grid container spacing={20} sx={{ py: 20 }}>
          <Grid item xs={12}>
            <Text>
              Disclaimer: The Pandora Box token is intended for use as an entry into the gambling that is built into the
              token code. The Pandora Box token itself provides no inherent value and does not give the user any rights
              or privileges. Pandora Box is a highly experimental project- please be sure to manage your degree of risk
              accordingly.
            </Text>
          </Grid>
        </Grid>
      </Page>
      <Stack sx={{ py: 10, bgcolor: '#000000' }}>
        <Page>
          <Stack direction="row" spacing={4}>
            <ButtonBase>
              <Text fontWeight="bold" color="#a1a1a1">
                TERM OF CONDITIONS
              </Text>
            </ButtonBase>
            <ButtonBase>
              <Text fontWeight="bold" color="#a1a1a1">
                BETTING RULES
              </Text>
            </ButtonBase>
            <ButtonBase>
              <Text fontWeight="bold" color="#a1a1a1">
                POLICY
              </Text>
            </ButtonBase>
            <ButtonBase>
              <Text fontWeight="bold" color="#a1a1a1">
                BLOG
              </Text>
            </ButtonBase>
          </Stack>
          <Stack sx={{ mt: 5 }}>
            <Text variant="body2">© 2021 copyright pandora</Text>
          </Stack>
        </Page>
      </Stack>
    </Wrapper>
  );
};

export default React.memo(Footer);
