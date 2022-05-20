"use strict";
// LvL1_1
for (let i = 1; i <= 10; i++) {
  console.log("Hello World " + i);
}

// LvL1_2
let numArray = [];
for (let i = 0; i <= 10; i++) {
  numArray.push(i);
}
console.log(numArray);

// LvL1_4
let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// LvL1_6
let retArray = [];
for (let i = 1; i <= 100; i++) {
  retArray.push(`image_${i}.jpg`);
}
console.log(retArray);

// LvL1_7
let number = 1;
do {
  console.log(`The Number is ${number}`);
  number++;
} while (number <= 5);

// LvL1_8
let number2 = 2;
do {
  console.log(number2);
  number2 += 2;
} while (number2 < 20);

// LvL1_9
let words = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];

let printWords = () => {
  let wordcount = document.getElementById("wordcount").value;
  let outputWords = document.getElementById("outputWords");
  outputWords.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length == Number(wordcount)) {
      outputWords.innerHTML += `<p>${words[i]}</p>`;
    } else {
      console.log("Wort nicht vorhanden!");
    }
  }
};

// LvL2_1
let imageArray = () => {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    returnArray.push(`image_${i}.jpg`);
  }
  console.log(returnArray);
};
imageArray();

// LvL2_2
// let loop = () => {
//   let eingabe = document.getElementById("eingabe").value;
//   let countedOs = [];
//   let loopOutput = document.getElementById("loopOutput");
//   for (let i = 0; i < eingabe; i++) {
//     countedOs.push("o");
//   }
//   loopOutput.innerHTML = `L${countedOs.join("")}p`;
// };

// LvL3_1
let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil",`;

let split = () => {
  let arr = [];
  let k = 1;
  let sum;
  for (let i = 0; i < text.length; i += 100) {
    text.slice(i, i + 100);
    console.log(text.slice(i, i + 100));
    arr.push(
      text.slice(i, i + 100) +
        ` - ${k} of ${Math.ceil(text.length / 100)} gesamte-Nachrichten`
    );
    k++;
  }
  console.log(arr);
};
split();

// LvL3_2
let division = document.getElementById("division");
let numArr = [5, 22, 15, 100, 55];
let divided = () => {
  for (let i = 0; i < numArr.length; i++) {
    for (let n = 0; n < 100; n++) {
      if (numArr[i] % n === 0 && n != 1 && n != numArr[i]) {
        division.innerHTML += `<p>${
          numArr[i]
        } laesst sich durch ${n} teilen. Das Ergebnis ist ${numArr[i] / n}`;
      }
    }
  }
};
divided();

// LvL3_3
let eingabe = document.getElementById("eingabe");
let loop = () => {
  let eingabeNummer = Number(eingabe.value);
  let countedOs = [];
  let loopOutput = document.getElementById("loopOutput");
  if (eingabeNummer === 0) {
    loopOutput.innerHTML = `Fehler - Fatal Error`;
  } else {
    let oh = "";
    if (eingabeNummer % 2 === 0) {
      for (let i = 0; i < eingabeNummer; i++) {
        countedOs.push("o");
      }
    } else if (eingabeNummer % 2 !== 0) {
      for (let i = 0; i < eingabeNummer; i++) {
        if (i % 2 === 0) {
          countedOs.push("o");
        } else {
          countedOs.push("0");
        }
      }
    }
    loopOutput.innerHTML = `L${countedOs.join("")}p`;
  }
};

// LvL3_4
let check = () => {
  let inputZahl = Number(document.getElementById("inputZahl").value);
  let ersteZahl = Number(document.getElementById("ersteZahl").value);
  let zweiteZahl = Number(document.getElementById("zweiteZahl").value);
  let checkAusgabe = document.getElementById("checkAusgabe");
  let zaehler = 0;
  if (inputZahl == 0) {
    checkAusgabe.innerHTML = `Zahl fehlt, abbruch!`;
  } else if (ersteZahl == zweiteZahl) {
    checkAusgabe.innerHTML = `<p>Bitte wähle zwei unterschiedliche Zahlen als Erste und Zweite Zahl!</p>`;
  } else {
    for (let i = 0; i < inputZahl; i++) {
      if (i % ersteZahl == 0 || i % zweiteZahl == 0) {
        zaehler += i;
      }
    }
    checkAusgabe.innerHTML = zaehler;
  }
};
