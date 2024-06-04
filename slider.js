const card1 = document.querySelector("#slider_card_0");
const card2 = document.querySelector("#slider_card_1");
const card3 = document.querySelector("#slider_card_2");

let cards = [];

card1.addEventListener("click", () => {
    card1.classList.toggle("clicked");
    cards = [card2, card3];
    refreshCard();
})

card2.addEventListener("click", () => {
    card2.classList.toggle("clicked");
    cards = [card1, card3];
    refreshCard();
})

card3.addEventListener("click", () => {
    card3.classList.toggle("clicked");
    cards = [card1, card2];
    refreshCard();
})

function refreshCard(){
    for(let c of cards){
        c.classList.remove("clicked");
    }

    cards = [];
}