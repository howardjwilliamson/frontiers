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
    inactive: {color:0x990099},
    active: {color:0xff00ff}
}

const vol = .1;

class Target extends Mesh
{

    constructor(note, index)
    {
        super
        (
            new CylinderGeometry(1,1,0.3,6),
            new MeshStandardMaterial(STATUS.inactive)
        );
        this.enabled = true;
        this.active = false;
        this.name = note;
        this.position.set(6 + (3*index), 6, 1);
        this.rotation.x = Math.PI/2;
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
        if (!this.enabled) return;
        this.position.z -= 0.2;
        this.active = true;
        this.material.color.setHex(STATUS.active.color);
        PlayNote
        (
            Solfege[this.name].url, vol,
            () =>
                {
                    this.material.color.setHex(STATUS.inactive.color);
                    this.position.z += 0.2;
                    this.active = false;
                }
        );
    }



}

export { Target };