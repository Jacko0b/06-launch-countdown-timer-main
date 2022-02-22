
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
    const flipCards = document.querySelectorAll(".flip-card");
    (function updateClock(){
        const currentDate = new Date();
        const msLeft = Date.parse(launchDate)-Date.parse(currentDate);
        let timeLeft = {
            ms: msLeft,
            second: Math.round(msLeft/1000 %60),
            minute: Math.round(msLeft/1000 /60 %60),
            hour: Math.round(msLeft/1000 /60 /60 %24),
            day: Math.round(msLeft/1000 /60 /60 /24 ),
        };
    
    
        ( function updateAnimation() {
            flipCards.forEach(card => {
                card.classList.toggle("flipped");

                
            });
        })();
        function number(unit){
            switch (unit){
                case "second":
                    return timeLeft.second;
            
                case "minute":
                    return timeLeft.minute;
    
                case "hour":
                    return timeLeft.hour;
    
                case "day":
                    return timeLeft.day;
                default:
                    break;        
            }
        }
        function updateTime (unit){
            clockDigits.forEach(digit => {
                if(digit.classList.contains(`clock-digit-${unit}`)){
                    const clockDigitPiece = digit.querySelectorAll(".clock-digit-piece")
                    clockDigitPiece.forEach(element => {
                        if(element.classList.contains("next-top") || element.classList.contains("next-bot")){
                            element.innerHTML = number(unit);
                        }
                        else element.innerHTML = number(unit);
                    });

                   
                }
            });
        };
        updateTime('second');
        updateTime('minute');
        updateTime('hour');
        updateTime('day');
        setTimeout(updateClock,1000);
        
    })();
})();