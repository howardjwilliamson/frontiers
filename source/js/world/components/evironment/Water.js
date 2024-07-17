import
{
    Mesh,
    BoxGeometry,
    MeshStandardMaterial
} from 'three';

class Water extends Mesh
{
    constructor ()
    {
        super
        (
            new BoxGeometry(30, 30, 0.2),
            new MeshStandardMaterial({color:0x000025})
        );
        this.position.x += 10;
    }

    tick(s)
    {

    }

}

export { Water };