var list = ["C", "D", "E", "F", "G", "A", "B"];

var sound = [];

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function start() {
  sound = [];
  sound.push(list[random(0, 2) * 2]);
  console.log(sound);
}

function next(repeatnum) {
  var randomnum = random(0, 1);
  var n = 0;
  while (n < repeatnum) {
    n += 1;
    cnext(randomnum);
  }
}

function cnext(randomnum) {
  var psound = sound[sound.length - 1];
  var psoundnum = list.indexOf(psound);
  var nsoundnum = 0;
  if (randomnum == 0) {
    nsoundnum = psoundnum + 1;
    if (nsoundnum == 7) {
      nsoundnum = 0;
    }
  } else {
    nsoundnum = psoundnum - 1;
    if (nsoundnum == -1) {
      nsoundnum = 6;
    }
  }
  sound.push(list[nsoundnum]);
  console.log(sound);
}

function melody(note, updown, randomness) {
  start();
  var n = 0;
  while (n < note - 1) {
    n += 1;
    next(random(updown - randomness, updown + randomness));
  }
  console.log(sound);
  // tomidi();
}

function tomidi() {
  import MidiWriter from "https://cdn.skypack.dev/midi-writer-js@2.1.4";

  // Start with a new track
  const track = new MidiWriter.Track();

  // Define an instrument (optional):
  track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }));

  // Add some notes:
  const note = new MidiWriter.NoteEvent({
    pitch: ["C4", "D4", "E4"],
    duration: "4"
  });
  track.addEvent(note);

  // Generate a data URI
  const write = new MidiWriter.Writer(track);
  console.log(write.dataUri());
}
