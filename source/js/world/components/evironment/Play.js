import
{ 
    Mesh, 
    MeshStandardMaterial, 
    TetrahedronGeometry
} from "three";

const STATUS =
{
    inactive: {color:0xb3b300},
    active: {color:0xffff00}
}

class Play extends Mesh
{

    constructor(game)
    {
        super
        (
            new TetrahedronGeometry(1, 3),
            new MeshStandardMaterial(STATUS.inactive)
        );
        this.game = game;
        this.active = false;
        this.position.set(8, 10, 2);
        console.log("Play created");
    }

    click()
    {
        if (this.active) return;
        this.active = true;
        this.game.play
        (
            () =>
            {
                this.position.z += 0.1;
                this.material.color.setHex(STATUS.inactive.color);
                this.active = false;
            }
        );
        this.position.z -= 0.1;
        this.material.color.setHex(STATUS.active.color);
    }

}

export { Play };