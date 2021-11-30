import { Menu } from '@mui/icons-material';
import { SwipeableDrawer, IconButton, Toolbar, styled, StackProps, Stack, AppBar, Image } from 'components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { logo } from 'assets/images';
import data from './data.json';
import Item from './components/Item';

const Wrapper = styled((props: StackProps) => {
  return <Stack direction="row" alignItems="center" sx={{ width: '100%' }} {...props} />;
})({
  position: 'relative',
});

const Drawer = styled(SwipeableDrawer)(() => ({
  '.MuiDrawer-paper': {
    width: ' 80% ',
    maxWidth: 414,
  },
}));

const MobileMenu: React.FC = (props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoPress = () => {
    router.push('/');
    handleClose();
  };
  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'transparent' }}>
        <Toolbar>
          <Wrapper>
            <IconButton onClick={handleOpen}>
              <Menu />
            </IconButton>
          </Wrapper>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onOpen={() => {
          handleOpen();
        }}
        onClose={handleClose}
      >
        <Stack alignItems="center" justifyContent="center" sx={{ p: 5 }}>
          <IconButton onClick={handleLogoPress}>
            <Image src={logo} width={64} />
          </IconButton>
        </Stack>

        <Stack alignItems="center" justifyContent="center" spacing={5} sx={{ p: 5 }}>
          {data.items.map((item, index) => {
            return <Item key={index} title={item.title} href={item.href} onClose={handleClose} />;
          })}
        </Stack>
      </Drawer>
      {props.children}
    </>
  );
};

export default MobileMenu;
