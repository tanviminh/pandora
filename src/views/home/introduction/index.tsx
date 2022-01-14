import { bgIntroduction } from 'assets/images';
import { Box, styled } from 'components';
import useDetectDevice from 'hooks/useDetect';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Wrapper = styled(Box)({
  minHeight: '100vh',
  backgroundImage: `url(${bgIntroduction})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

let swiperRef = null;
const View: React.FC = () => {
  const { isMobile } = useDetectDevice();
  const [tab, setTab] = useState(0);
  const [manualSlide, setManualSlide] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line prefer-destructuring
    // eslint-disable-next-line no-unused-vars
    swiperRef = (document.querySelector('.swiper-about') as any).swiper;
  }, []);
  useEffect(() => {
    if (!swiperRef) {
      return;
    }
    if (!manualSlide) {
      return;
    }
    swiperRef.slideToLoop(tab);
  }, [manualSlide, tab]);

  return (
    <Wrapper>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        autoHeight
        onSlideChange={(swiper) => {
          setTab(swiper.realIndex);
          setManualSlide(false);
        }}
        className="swiper-about"
        loop
      >
        <SwiperSlide key={0}>
          <Tab1 />
        </SwiperSlide>
        <SwiperSlide key={1}>
          <Tab2 />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default React.memo(View);
