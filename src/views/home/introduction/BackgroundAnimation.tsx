import React, { useEffect, useRef } from 'react';
import { Box } from 'components';
import { Application, Loader } from 'pixi.js';
import { Spine } from 'pixi-spine';
import { info } from 'utils/log';
import useDetectDevice from 'hooks/useDetect';

const SpineAnimation: React.FC<{ url: string }> = ({ url }) => {
  const viewer = useRef<any>();
  const { isMobile } = useDetectDevice();
  useEffect(() => {
    if (!viewer) {
      return;
    }
    const app = new Application({
      backgroundAlpha: 0,
      backgroundColor: 0x000000,
      width: viewer.current.parentNode.clientWidth ?? 0,
      height: viewer.current.parentNode.clientHeight ?? 0,
      powerPreference: 'high-performance',
      autoDensity: true,
    });

    app.renderer.plugins.interaction.autoPreventDefault = false;
    app.renderer.view.style.touchAction = 'auto';
    viewer.current.replaceChildren(app.view);

    app.view.style.touchAction = 'auto';
    app.view.style.opacity = '0';
    app.view.style.transition = '0.5s';

    const onAssetsLoaded = (loader: Loader, resources: any) => {
      try {
        const model = new Spine(resources['model'].spineData);
        const localBound = model.getLocalBounds();
        const parentWidth = viewer.current.parentNode.clientWidth;
        const spriteWidth = localBound.width;
        const scale = parentWidth / spriteWidth;
        const moreScale = isMobile ? 0.02 : 0.1;
        model.position.set(0, 0);
        model.scale.set(scale + moreScale);
        model.state.setAnimation(1, 'animation', true);
        app.stage.addChild(model);
        app.view.style.opacity = '1';
      } catch (error) {
        info(error);
      }
    };
    app.loader.add('model', url, { crossOrigin: '*' });
    app.loader.load(onAssetsLoaded);
  }, [isMobile, url]);

  return <Box ref={viewer} sx={{ width: '100%', height: '100%' }} />;
};

export default React.memo(SpineAnimation);
