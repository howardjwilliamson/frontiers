import { Group } from 'three';
import { Tile } from './Tile';

class Grid extends Group
{

    constructor(x, y, onclick)
    {
        super();
        this.tiles = [];
        for(let i = 0; i < x; i++)
        {
            this.tiles[i] = [];
            for (let j = 0; j < y; j++)
            {
                const t = new Tile(i, j, onclick);
                this.tiles[i].push(t);
                this.add(t);
            }
        }
    }

    tick(s)
    {

    }
}

export { Grid };