import { Group } from 'three';
import { createLine } from '../../system/line';

class Axis extends Group
{
    constructor()
    {
        super();
        this.add(createLine([0,0,0], [10,0,0], 0xff0000));
        this.add(createLine([0,0,0], [0,10,0], 0x00ff00));
        this.add(createLine([0,0,0], [0,0,10], 0x0000ff));
    }
}

export { Axis };