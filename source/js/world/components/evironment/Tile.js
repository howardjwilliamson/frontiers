import
{
    Mesh,
    CylinderGeometry,
    MeshStandardMaterial
} from 'three';

class Tile extends Mesh
{

    constructor(x, y)
    {
        super(new CylinderGeometry(1,1,0.6,6), new MeshStandardMaterial({color:0x00ff00}));
        this.position.set((x*2)+(y%2), (y*2), 0);
        this.rotation.x = Math.PI/2;
        console.log("tile.created:(" + x + "," + y + ")");
    }

    toString()
    {
        return this.id;
    }

}

export { Tile };