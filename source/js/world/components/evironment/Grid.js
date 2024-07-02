import { Group } from 'three';
import { Tile } from './Tile';

class Grid extends Group
{

    constructor(x, y)
    {
        super();
        this.tiles = [];
        for(let i = 0; i < x; i++)
        {
            this.tiles[i] = [];
            for (let j = 0; j < y; j++)
            {
                const t = new Tile(i, j);
                this.tiles[i].push(t);
                this.add(t);
            }
        }
    }

}

export { Grid };