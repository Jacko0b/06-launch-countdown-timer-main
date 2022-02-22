
let test= new Date("1-1-1");
// console.log(test)
// test.setSeconds(10);
// test.setMinutes(29);
// test.setHours(5);
// test.setDate(20);
// console.log(test);

(function (){
    const clockDigits = document.querySelectorAll(".clock-digit")
    const launchDate = new Date("2022-11-07");

    (function updateClock(){
    const currentDate = new Date();
    const msLeft = Date.parse(launchDate)-Date.parse(currentDate);
    let timeLeft = {
        ms: msLeft,
        s: Math.round(msLeft/1000 %60),
        m: Math.round(msLeft/1000 /60 %60),
        h: Math.round(msLeft/1000 /60 /60 %60),
        d: Math.round(msLeft/1000 /60 /60 /24 ),
    };
    
    
    ( function updateAnimation() {
        clockDigits.forEach(digit => {
            let flipCard = digit.querySelector(".flip-card")
            flipCard.classList.toggle("flipped")
        });
    })();
    
    console.log();
    setTimeout(updateClock,1000);
    })();
})();