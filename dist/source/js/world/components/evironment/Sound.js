

export const Solfege = 
{
    "a": { url:'../../../../../assets/audio/solfege/notes/katy/note060-do.wav', volum: 1 },
    "b": { url:'../../../../../assets/audio/solfege/notes/katy/note062-re.wav', volum: 1 },
    "c": { url:'../../../../../assets/audio/solfege/notes/katy/note064-mi.wav', volum: 1 },
    "d": { url:'../../../../../assets/audio/solfege/notes/katy/note065-fa.wav', volum: 1 },
    "e": { url:'../../../../../assets/audio/solfege/notes/katy/note067-so.wav', volum: 1 },
    "f": { url:'../../../../../assets/audio/solfege/notes/katy/note069-la.wav', volum: 1 },
    "g": { url:'../../../../../assets/audio/solfege/notes/katy/note071-ti.wav', volum: 1 },
    "A": { url:'../../../../../assets/audio/solfege/notes/katy/note072-do.wav', volum: 1 },
};

export const Notes = ["a", "b", "c", "d", "e", "f", "g", "A"];

export const Sharps = ["a#", "xx", "c#", "d#", "xx", "f#", "g#", "xx"];

export const PlayNote = (url, vol, on_end) =>
{
    const audio = new Audio(url);
    audio.volume = vol;
    audio.addEventListener("ended", on_end);
    audio.play();
}

class Sound{}

export { Sound };