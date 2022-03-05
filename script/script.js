import WriteEffect from "./WriteEffect.js";

// Scroll To btns
let scrollingBtns = document.querySelectorAll(".scroll");

scrollingBtns.forEach((btn) => {
  btn.onclick = () => {
    let scrolling = document.getElementById(
      btn.getAttribute("data-scroll")
    ).offsetTop;
    window.scrollTo({ top: scrolling, behavior: "smooth" });
  };
});

// WriteER Effect
const writer = new WriteEffect();

window.addEventListener("DOMContentLoaded", () => {
  writer.write({
    box: document.querySelector("#Landing .words h1 span"),
    words: ["FrontEnd", "Designer", "Freelancer", "Ahmed Ashraf", "For3oN"],
    speed: 0.4,
    delay: 1.8,
  });
});

// Timer
let Days = document.querySelector("#events .Days");
let Hours = document.querySelector("#events .Hours");
let Minutes = document.querySelector("#events .Minutes");
let Seconds = document.querySelector("#events .Seconds");
// Return Lengths 2 Num
let lengths = (e) => {
  let floore = Math.floor(e);
  return floore.toString().length >= 2 ? floore.toString() : "0" + floore;
};
// Ubdate Date Every Second
setInterval(() => {
  let today = Math.floor(Date.now() / 1000);
  let difrent = new Date("2023-02-01").getTime() / 1000 - today;
  Seconds.textContent = lengths(difrent % 60);
  Minutes.textContent = lengths((difrent / 60) % 60);
  Hours.textContent = lengths((difrent / 60 / 60) % 60);
  Days.textContent = lengths(difrent / 60 / 60 / 24);
}, 1000);

// On Scroll Handelar
let btnTop = document.querySelector(".toTopBtn");
let artSection = document.querySelector("#articles").offsetTop;

// Nums
let timer = document.querySelectorAll("#stats .info span");
let stateSection = document.querySelector("#stats");

// Fill Progress parFor Scroll
let progressesBar = document.querySelectorAll("#ourSkills .bottom div");
let progSection = document.querySelector("#ourSkills");

const scrollHandelar = () => {
  // Proggress bar
  if (window.scrollY >= progSection.offsetTop - 200) {
    progressesBar.forEach((progres) => {
      progres.style.width = progres.getAttribute("data-par");
    });
  }

  // Show To Top Btn
  window.scrollY >= artSection
    ? btnTop.classList.add("show")
    : btnTop.classList.remove("show");

  // Stop Here If Scrool <= State Sction
  if (window.scrollY <= stateSection.offsetTop - 200) return;

  timer.forEach((element) => {
    const targetNum = +element.getAttribute("data-num");
    const speed = 1500;

    const timerVal = setInterval(() => {
      const numNow = +element.textContent;

      // Start Timer Nums
      if (numNow < targetNum) {
        // Increse Timer
        element.textContent = numNow + 1;

        // Stop Here
        return;
      }

      // Stop Interval
      clearInterval(timerVal);
    }, speed / targetNum);
  });
};

window.addEventListener("scroll", scrollHandelar);
