class WriteEffect {
  constructor() {
    this.wordIdx = 0; // For Get Word Index Right Now !
    this.letterIdx = 0; // For Get letter Index Right Now !
    this.nextWord = true; // For Get Next Word
  }

  write({ box, words, speed, delay }) {
    // Conver His Secound To MilSecound
    delay = delay * 1000;
    speed = speed * 1000;

    // Write Handelar
    const writeHandelar = () => {
      if (!this.nextWord) return;

      this.nextWord = false;

      // Write Interval
      const writeInterval = setInterval(() => {
        // Get letter Now !
        const letter = words[this.wordIdx]?.[this.letterIdx];

        if (!letter) {
          // Check there is next word
          const nextWordHandelar = () => {
            // reset all if not words yet
            if (!words[this.wordIdx]) {
              this.wordIdx = 0;
              this.letterIdx = 0;

              // Stop Here
              return;
            }

            // Get Next Word
            this.wordIdx++;
            this.letterIdx = 0;
            box.textContent = "";

            // Re Play The write Mehod
            this.nextWord = true;
          };

          // Get Next Word After Delay
          setTimeout(nextWordHandelar, delay);

          // Stop The Intervak Here
          clearInterval(writeInterval);

          // Stop Here
          return;
        }

        // Write letter In Box
        box.textContent += letter;

        // Get Next letter
        this.letterIdx++;
      }, speed);
    };

    // Check Next Word
    setInterval(writeHandelar, 100);
  }
}

export default WriteEffect;
