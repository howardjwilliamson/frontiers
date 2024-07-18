import { Group } from 'three';
import 
{
    Notes, Solfege, PlayNote
} from './Sound';
import { Target } from './Target';

class Game extends Group
{

    constructor(target_count, oncomplete, onmatch, onfail)
    {
        super();
        this.targets = [];
        this.on_complete = oncomplete;
        this.on_match = onmatch;
        this.on_fail = onfail;

        /*
        The min note count is three. A root note will be added at
        the start and end, with at least one random note in between.
        */
        if (target_count < 3) target_count = 3;

        this.index = 0;
        this.test_index = 0;

        this.notes = [];

        for(let i = 0; i < target_count; i++)
        {
            this.notes.push(Notes[Math.floor(Math.random() * Notes.length)]);
        }
        Math.random() < 0.5 ? this.notes[0] = "A" : this.notes[0] = "a";
        Math.random() < 0.5 ? this.notes[target_count-1] = "A" : this.notes[target_count-1] = "a";

        for(let i = 0; i < target_count; i++)
        {
            const target = new Target(this.notes[i], i);
            this.targets.push(target);
            this.add(target);
        }
        
        console.log(this.targets);

    }

    play(end)
    {
        this.targets[this.index].click();
        PlayNote
        (
            Solfege[this.targets[this.index++]].url,
            0.2,
            () =>
            {
                if (this.index >= this.targets.length)
                {
                    this.index = 0;
                    end();
                }
                else this.play(end);
            }
        );
    }

    test(note)
    {
        if(this.test_index == this.notes.length)
        {
            console.log("game over");
            return;
        }
        if(note == this.notes[this.test_index])
        {
            if(this.test_index == this.notes.length-1)
            {

                this.on_complete();
            }
            else
            {
                this.on_match();
            }
            this.targets[this.test_index].material.color.setHex(0x00ff00);
            this.targets[this.test_index].enabled = false;
        }
        else
        {
            this.targets[this.test_index].material.color.setHex(0xff0000);
            for(let i = 0; i < this.targets.length; i++) this.targets[i].enabled = false;
            this.test_index = this.notes.length;
            this.on_fail();
        }
        this.test_index++;
    }

}

export { Game };