import { styled, Stack } from 'components';

export default styled(Stack)`
  border-radius: 5px;
  box-shadow: inset -1.9px 2.3px 4px 0 rgba(23, 69, 174, 0.2);
  border-style: solid;
  border-width: 3px;
  border-image-source: linear-gradient(to top, #e3e3e3, #fff, #9a9a9a, #ddd, #aaa, #fff, #fff, #fff);
  border-image-slice: 1;
  background-image: linear-gradient(to top, #040d1a, #051338),
    linear-gradient(to top, #e3e3e3, #fff, #9a9a9a, #ddd, #aaa, #fff, #fff, #fff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: relative;
  z-index: 2;
`;
