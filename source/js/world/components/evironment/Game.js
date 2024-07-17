import { Group } from 'three/examples/jsm/libs/tween.module.js';
import 
{
    Notes, Solfege, Play
} from './Sound';

class Game extends Group
{

    constructor(note_count)
    {

        /*
        The min note count is three. A root note will be added at
        the start and end, with at least one random note in between.
        */
        if (note_count < 3) note_count = 3;

        this.targets = [];
        this.index = 0;

        for(let i = 0; i < note_count; i++)
        {
            this.targets.push(Notes[Math.floor(Math.random() * Notes.length)]);
        }

        Math.random() < 0.5 ? this.targets[0] = "A" : this.targets[0] = "a";
        Math.random() < 0.5 ? this.targets[note_count-1] = "A" : this.targets[note_count-1] = "a";

        console.log(this.targets);

    }

    next()
    {
        Play
        (
            Solfege[this.targets[this.index++]].url,
            0.2
        );
        if (this.index >= this.targets.length) this.index = 0;
    }

}

export { Game };