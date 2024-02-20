"use client";
import isDomReady from "@/lib/client/isDomReady";


isDomReady()
  .completed()
  .then(() => {
    const words = ["BITCOIN MAXIMALISTS ", "VISIONARIES ", "WEALTH ", "ENTERPRUNER "],
      colors = ["blue", "green", "yellow", "red"],
      text = document.querySelector(
        "#word-change-and-typing-animation-span .animation-word"
      )!;

    // Generator (iterate from 0-3)
    function* generator(): Generator<number, number> {
      var index = 0;
      while (true) {
        yield index++;

        if (index > 3) {
          index = 0;
        }
      }
    }

    // Printing effect
    function printChar(word: string) {
      let i = 0;
      if (text) {
        text.innerHTML = "";
        text.classList.add(colors[words.indexOf(word)]);
        let id = setInterval(() => {
          if (i >= word.length) {
            deleteChar();
            clearInterval(id);
          } else {
            text.innerHTML += word[i];
            i++;
          }
        }, 200);
      }
    }

    // Deleting effect
    function deleteChar() {
      let word = text.innerHTML;
      let i = word.length - 1;
      let id = setInterval(() => {
        if (i >= 0) {
          text.innerHTML = text.innerHTML.substring(
            0,
            text.innerHTML.length - 1
          );
          i--;
        } else {
          printChar(words[gen.next().value]);
          clearInterval(id);
        }
      }, 100);
    }

    // Initializing generator
    let gen = generator();

    printChar(words[gen.next().value]);

  });
