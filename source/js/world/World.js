import { createCamera } from './components/camera';
import { createLight } from './components/lights';
import { createScene } from './components/scene';
import { createRenderer } from './system/renderer';
import { createControls } from './system/controls';
import { Loop } from './system/Loop';
import { Resizer } from './system/Resizer';
import { Grid } from './components/evironment/Grid';
import { Axis } from './components/evironment/Axis';
import { Water } from './components/evironment/Water';
import { Raycaster, Vector2 } from 'three';
import { Game } from './components/evironment/Game';
import { Recycle } from './components/evironment/Recycle';
import { Play } from './components/evironment/Play';

let
    _camera,
    _light,
    _scene,
    _renderer,
    _controls,
    _loop,
    _resizer,
    _keyboard_grid,
    _recycle,
    _play,
    _game,
    _plays = 0,
    _successes = 0;

const 
    _mouse = new Vector2(),
    _raycaster = new Raycaster();

class World
{
    constructor(container)
    {
        _camera = createCamera();
        _light = createLight();
        _scene = createScene();
        _renderer = createRenderer();
        _renderer.domElement.addEventListener('click', this.onclick, true);
        _resizer = new Resizer(container, _camera, _renderer);
        _loop = new Loop(_camera, _scene, _renderer);
        _controls = createControls(_camera, _renderer.domElement);
        _controls.addEventListener('change', () => { _renderer.render(_scene, _camera); } );
        container.append(_renderer.domElement);
        _keyboard_grid = new Grid(8, 2, this.grid_onclick);
        _game = new Game(3, this.game_on_complete, this.game_on_match, this.game_on_fail);
        _play = new Play(_game);
        console.log("world.created");
        _recycle = new Recycle
        (
            ()=>
            {
                _scene.remove(_game, _play);
                _game = new Game(5, this.game_on_complete, this.game_on_match, this.game_on_fail);
                _play = new Play(_game);
                _scene.add(_game, _play);
            }
        );
    }

    onclick(event)
    {
        _mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        _mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        console.log(_mouse);
        _raycaster.setFromCamera(_mouse, _camera);
        // Check for keyboard clicks.
        let intersects = _raycaster.intersectObjects(_scene.children, true);
        if(intersects.length > 0)
        {
            const selected_object = intersects[0].object;
            console.log("selected:" + selected_object.toString());
            selected_object.click();
        }
    }

    async init()
    {
        // Add models here.
        _scene.add
        (
            _light.light, _light.ambient, _light.hemi,
            _keyboard_grid,
            _game,
            _play,
            _recycle
        );
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

    grid_onclick(note)
    {
        console.log("Click:" + note);
        _game.test(note);
    }

    game_on_match()
    {
        console.log("game.match");
    }

    game_on_complete()
    {
        console.log("game.complete");
        _plays++;
        _successes++;
        document.getElementById("info").innerText = _successes + "/" + _plays;

    }

    game_on_fail()
    {
        console.log("game.fail");
        _plays++;
        document.getElementById("info").innerText = _successes + "/" + _plays;
    }

}


export { World };