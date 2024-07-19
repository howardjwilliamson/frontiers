import
{
    MathUtils,
    Mesh
} from 'three';

const ROTATION_DIRECTION =
{
    Clockwise: -1,
    CounterClockwise: 1
};

const ROTATION_AXIS =
{
    X:1, Y:2, Z:3
};

function rotate(axis, direction, degrees)
{
    return axis += MathUtils.degToRad(direction * degrees);
}

export
{
    rotate,
    ROTATION_DIRECTION
};