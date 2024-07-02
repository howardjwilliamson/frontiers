import {PerspectiveCamera} from 'three';

function createCamera()
{
    const camera = new PerspectiveCamera
    (
        35, // Field of view.
        1, // Aspect ration (dummy value).
        0.1, // Near clipping plane.
        100 // Far clipping plane.
    );
    camera.position.set(0, 0, 10);
    const mps = 1;

    camera.tick = (s) =>
        {
        }

    return camera;
}
export{createCamera};