import { AppBar, Logo, Page, Slide, Stack, StackProps, styled, Toolbar, useScrollTrigger } from 'components';
import useDetectDevice from 'hooks/useDetect';
import React from 'react';
import Item from './components/Item';
import data from './data.json';
import { Props } from './types';

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Wrapper = styled((props: StackProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" flex={1} sx={{ py: 8 }} {...props} />
  );
})({});

const ItemWrapper = styled((props: StackProps) => {
  return <Stack direction="row" spacing={4} {...props} />;
})({});

const Menu: React.FC = (props) => {
  const { isMobile } = useDetectDevice();
  // const [hash, setHash] = useState('');
  // useEffect(() => {
  //   setHash(window.location.hash);
  //   const handle = () => {
  //     setHash(window.location.hash);
  //   };
  //   window.addEventListener('hashchange', handle, {});

  //   return () => {
  //     window.removeEventListener('hashchange', handle);
  //   };
  // }, []);

  return (
    <>
      {!isMobile && (
        <HideOnScroll {...props}>
          <AppBar elevation={0} sx={{ bgcolor: 'transparent' }}>
            <Toolbar>
              <Page>
                <Wrapper>
                  <Logo />
                  <ItemWrapper>
                    {data.items.map((item, index) => {
                      // const active = _.isEqual(parseHash(hash), parseHash(item.href));
                      return <Item key={index} title={item.title} href={item.href} />;
                    })}
                  </ItemWrapper>
                </Wrapper>
              </Page>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      )}

      {props.children}
    </>
  );
};

export default Menu;
