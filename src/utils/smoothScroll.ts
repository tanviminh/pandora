import { isMobile, isSafari } from 'react-device-detect';

const smoothScroll = (element: any, duration = 400) => {
  if (!element || !element.offsetTop) {
    return;
  }

  if (isSafari || isMobile) {
    const startingY = window.pageYOffset;
    const diff = element.offsetTop - startingY;
    let start = 0;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      // Elapsed milliseconds since start of scrolling.
      const time = timestamp - start;
      // Get percent of completion in range [0, 1].
      const percent = Math.min(time / duration, 1);

      window.scrollTo(0, startingY + diff * percent);

      // Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
    return;
  }
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth',
  });
};

export default smoothScroll;
