import { createCamera } from './components/camera';
import { createLight } from './components/lights';
import { createScene } from './components/scene';
import { createRenderer } from './system/renderer';
import { createControls } from './system/controls';
import { Loop } from './system/Loop';
import { Resizer } from './system/Resizer';

let
    _camera,
    _light,
    _scene,
    _renderer,
    _controls,
    _loop,
    _resizer;

class World
{
    constructor(container)
    {
        _camera = createCamera();
        _light = createLight();
        _scene = createScene();
        _renderer = createRenderer();
        _controls = createControls(_camera, _renderer.domElement);
        _resizer = new Resizer(container, _camera, _renderer);
        _loop = new Loop(_camera, _scene, _renderer);
        _controls.addEventListener('change', () => { _renderer.render(_scene, _camera); } );
        console.log("world.created");
    }

    async init()
    {
        // Add models here.
        _scene.add(_light.light, _light.ambient, _light.hemi);
        // Add updatable elements here.
        _loop.updatables.push(_camera, _controls);
        console.log("world.init");
    }

    render()
    {
        _renderer.render(_scene, _camera);
    }

    start()
    {
        _loop.start();
        console.log("world.start");
    }

    stop()
    {
        _loop.stop();
        console.log("world.stop");
    }
}

export { World };