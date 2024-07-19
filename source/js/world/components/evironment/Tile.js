import
{
    Mesh,
    CylinderGeometry,
    MeshStandardMaterial
} from 'three';

import
{ 
    Sound,
    Solfege,
    Notes, Sharps, PlayNote
} from './Sound';

const STATUS =
{
    inactive: {color:0x995c00},
    active: {color:0xff9900}
}

const vol = .1;

class Tile extends Mesh
{

    constructor(x, y, onclick)
    {
        super
        (
            new CylinderGeometry(1,1,0.3,6),
            new MeshStandardMaterial(STATUS.inactive)
        );
        this.active = false;
        this.position.set((x*2)+(y%2), (y*2), 0);
        this.rotation.x = Math.PI/2;
        this.coord = "(" + x + "," + y + ")";
        this.onclick = onclick;
        
        // Assign names and notes, disable hidden tiles.
        switch (y)
        {
            case 0:
                default: this.name = Notes[x];
                break;
            case 1:
                switch(x)
                {
                    case 1:
                    case 4:
                    case 7:
                        // Hide this tile, it's not a real note.
                        this.visible = false;
                    default:
                        this.active = true;
                        this.name = Sharps[x];
                        break;
                }
                break;
        }
        console.log("tile.created:(" + x + "," + y + ") " + this.name);
    }

    tick(s)
    {

    }

    toString()
    {
        return this.name;
    }

    click()
    {
        // Play audio, and make tile inactive until the playback is complete. Skip if already active.
        if (this.active) return;
        this.position.z -= 0.1;
        this.active = true;
        this.material.color.setHex(STATUS.active.color);
        PlayNote
        (
            Solfege[this.name].url, vol,
            () =>
                {
                    this.material.color.setHex(STATUS.inactive.color);
                    this.position.z += 0.1;
                    this.active = false;
                    this.onclick(this.name);
                }
        );
    }

}

export { Tile };