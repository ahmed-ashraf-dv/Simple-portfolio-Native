/*
    00
*/

// Main
let ancors = document.querySelectorAll("a");
ancors.forEach(a => a.onclick = e => e.preventDefault());

// Scroll To btns
let scrollingTools   = document.querySelectorAll(".scroll");
scrollingTools.forEach(btn => {
    btn.onclick = () => {
        let scrolling = document.getElementById(btn.getAttribute("data-scroll")).offsetTop;
        window.scrollTo({top:scrolling,behavior:"smooth"});
    }
})

// Fill Progress parFor Scroll
let procssBar = document.querySelectorAll("#ourSkills .bottom div");
let progSec   = document.querySelector("#ourSkills");
let par = setInterval(() => {
    if(window.scrollY >= progSec.offsetTop - 200){
        procssBar.forEach(bar => bar.style.width = bar.getAttribute("data-par"));
        clearInterval(par)
    }
}, 10);

// Writer Effect
let landimgSpan  = document.querySelector("#Landing .words h1 span");
let names        = ["FrontEnd","Designer","Freelancer","Ahmed Ashraf","For3oN"];
let aarI         = 0;
let wordI        = 0;
window.addEventListener('DOMContentLoaded',() => {
    setInterval(() => {
        if(wordI < names[aarI].length){
            landimgSpan.textContent += names[aarI][wordI]
            wordI++;
        }else if(aarI < names.length - 1){
            landimgSpan.textContent = '';
            wordI = 0;
            aarI++;
        }else{
            landimgSpan.textContent = '';
            wordI = 0;
            aarI = 0;
        } 
    },700);
});

// Timer
let Days      = document.querySelector("#events .Days");
let Hours     = document.querySelector("#events .Hours");
let Minutes   = document.querySelector("#events .Minutes");
let Seconds   = document.querySelector("#events .Seconds");
// Return Lengths 2 Num
let lengths = e => {
    let floore = Math.floor(e);
    return floore.toString().length >= 2 ? floore.toString() : "0" + floore;
}
// Ubdate Date Every Second
setInterval(() => {
    let today    = Math.floor(Date.now() / 1000);
    let difrent  = (new Date('2025-02-01').getTime() / 1000) - today;
    Seconds.textContent = lengths(difrent % 60);
    Minutes.textContent = lengths(difrent / 60 % 60);
    Hours.textContent   = lengths(difrent / 60 / 60 % 60);
    Days.textContent    = lengths(difrent / 60 / 60 / 24);
}, 1000);

// Fetch Api
let lis     = Array.from(document.querySelectorAll("#topVideos li"));
let Show    = document.querySelector("#topVideos .vid");
lis.forEach(li => {
    li.addEventListener("click",() => {
        fetch("../api-json/jsonFile.json")
        .then(res => res.json())
        .then(data => Show.innerHTML = `<iframe src="${data[lis.indexOf(li)].vidUrl}"></iframe>`)
        .catch(() => Show.innerHTML = '<img src="image/video-preview.jpg">')
    })
});
// On Scroll Start Nums Up && Show To Top Btn
// To Top Btn
let btnTop = document.querySelector(".toTopBtn");
let secArt = document.querySelector("#articles").offsetTop;
// Nums
let timer   = document.querySelectorAll("#stats .info span");
let statSec = document.querySelector("#stats");
window.onscroll = () =>{
    if(window.scrollY >= statSec.offsetTop - 200){
        timer.forEach(el => {
            let timerVal = setInterval(() => {
                if(parseInt(el.textContent) < parseInt(el.getAttribute("data-num"))){
                    el.textContent = parseInt(el.textContent) + 1;
                }else{
                    clearInterval(timerVal);
                }
            },80);
        })
    }
    // To Top Btn
    window.scrollY >= secArt ? btnTop.classList.add("show") : btnTop.classList.remove("show");
}
// Add And Remove Class In Input
let requestInp = document.querySelectorAll("#requestADiscount .inp");
requestInp.forEach(inp => {
    inp.addEventListener("focus",() => inp.classList.add("Show"))
    inp.addEventListener("blur",() => inp.classList.remove("Show"))
})
