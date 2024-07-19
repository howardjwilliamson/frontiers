import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createControls(camera, canvas)
{
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = false;
    controls.listenToKeyEvents(window);
    //controls.autoRotate = true;

    controls.tick = (s) => {controls.update();}

    return controls;
}

export { createControls };