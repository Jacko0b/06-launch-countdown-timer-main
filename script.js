
(function (){
    const clockDigits = document.querySelectorAll(".clock-digit")
    const launchDate = new Date("2024-06-09");
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
                    const clockDigitPieces = digit.querySelectorAll(".clock-digit-piece");
                    clockDigitPieces.forEach(element => {
                        if(element.classList.contains("next-top") || element.classList.contains("next-bot")){
                            if(element.innerHTML !== ((number(unit)+1)+"")){
                                element.innerHTML = number(unit)+1;
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
