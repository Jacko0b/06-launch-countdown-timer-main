const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    card.addEventListener("click", ()=>{
        card.classList.toggle("animate");
        card.innerHTML = "123";
    });
});