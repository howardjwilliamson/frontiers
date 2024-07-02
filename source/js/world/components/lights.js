import
{
    AmbientLight,
    DirectionalLight,
    HemisphereLight
} from "three";

function createLight()
{
    const hemi = new HemisphereLight('yellow', 'darkred', 5);
    const ambient = new AmbientLight('white', 2);
    const light = new DirectionalLight('white', 8);
    light.position.set(10, 10, 10);

    light.tick = (s) =>
        {
        }

    return {light, ambient, hemi};
}

export { createLight };