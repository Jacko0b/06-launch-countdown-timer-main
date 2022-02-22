
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
    
    
        // ( function updateAnimation() {
        //     flipCards.forEach(card => {
        //         card.classList.toggle("flipped");

                
        //     });
            
        // })();
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
                    const clockDigitPieces = digit.querySelectorAll(".clock-digit-piece")
                    const flipCard = digit.querySelector(".flip-card")
                    clockDigitPieces.forEach(element => {
                        if(element.classList.contains("next-top") || element.classList.contains("next-bot")){
                            if(element.innerHTML !== ((number(unit)+1)+"")){
                                element.innerHTML = number(unit)+1;
                                flipCard.classList.add("flipped");
                            }
                            
                        }
                        else  if(element.classList.contains("current-top") || element.classList.contains("current-bot")){
                            if(element.innerHTML !== (number(unit)+"")){
                                element.innerHTML = number(unit);
                            }
                            
                        }
                        
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