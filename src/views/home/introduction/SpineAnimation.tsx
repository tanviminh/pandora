import React, { useEffect, useRef } from 'react';
import { Box } from 'components';
import { Application, Loader } from 'pixi.js';
import { Spine } from 'pixi-spine';
import { info } from 'utils/log';

const SpineAnimation: React.FC = () => {
  const viewer = useRef<any>();
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
        const parentHeight = viewer.current.parentNode.clientHeight;
        const spriteHeight = localBound.height;

        const scale = parentHeight / spriteHeight;
        const positionX = app.screen.width / 2 - localBound.x * scale - (localBound.width / 2) * scale;
        const positionY =
          app.screen.height / 2 - localBound.y * scale - (localBound.height / 2) * scale + app.screen.height / 15;
        const position = { positionX, positionY };
        model.position.set(position.positionX, position.positionY);
        model.scale.set(scale);
        model.state.setAnimation(1, 'animation', true);
        app.stage.addChild(model);
        app.view.style.opacity = '1';
      } catch (error) {
        info(error);
      }
    };
    app.loader.add('model', '/animations/model.json', { crossOrigin: '*' });
    app.loader.load(onAssetsLoaded);
  }, []);

  return <Box ref={viewer} sx={{ width: '100%', height: '100%' }} />;
};

export default React.memo(SpineAnimation);
