import { Clock } from 'three';
import { SceneUtils } from 'three/examples/jsm/Addons.js';

const _clock = new Clock();

class Loop
{
    constructor(camera, scene, renderer)
    {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    start()
    {
        this.renderer.setAnimationLoop
        (
            () => 
            {
                this.tick(); this.renderer.render(this.scene, this.camera);
            }
        );
    }

    stop()
    {
        this.renderer.setAnimationLoop(null);
    }

    tick()
    {
        for (const object of this.updatables)
            {
                object.tick(_clock.getDelta());
            }
    }
}

export { Loop };