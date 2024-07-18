import
{ 
    Line,
    LineBasicMaterial,
    BufferGeometry,
    Vector3,
    Color
} from "three";

function createLine(start, finish, color)
{
    const points = [];
    points.push(new Vector3().fromArray(start), new Vector3().fromArray(finish));
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial();
    material.color = new Color(color);
    const line = new Line(geometry, material);

    line.tick = (s) =>
        {
        }

    return line;
}

export { createLine };