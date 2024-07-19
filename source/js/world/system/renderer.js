import { WebGLRenderer } from 'three';

function createRenderer()
{
    const renderer = new WebGLRenderer({antialias:true});
    renderer.physicallCorrectLights = true;
    return renderer;
}
export {createRenderer};