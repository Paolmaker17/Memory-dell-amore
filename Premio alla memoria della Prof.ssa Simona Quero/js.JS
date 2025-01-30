document.addEventListener("DOMContentLoaded", function() {
    const cards=document.querySelectorAll('.memory-card')
    const parent=cards[0].parentNode

    const cardsArray=Array.from(cards)

    function shuffle(array){
        for (let i=array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]]=[array[j], array[i]]
        }
        return array
    }

    const shuffledCards=shuffle(cardsArray)

    shuffledCards.forEach(card => parent.appendChild(card))
})

function difficultyEasy(){
    document.getElementById("Difficulty").style.display="none"
    document.getElementById("title").style.display="none"
    document.getElementById("home").style.display="block"

    document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.memory-card');
    const parent = cards[0].parentNode;

    const cardsArray = Array.from(cards);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const shuffledCards=shuffle(cardsArray)

    shuffledCards.forEach(card => parent.appendChild(card))
})

    const cards=document.querySelectorAll("#img-memory")
    cards.forEach(element=> element.style.display="flex")

    let hasFlippedCard=false
    let lockBoard=false
    let firstCard, secondCard
    let matchedPairs = 0
    const totalPairs = cards.length / 2

function flipCard() {
    if(lockBoard) return
    if(this === firstCard) return

    this.classList.add('flip')

    if(!hasFlippedCard){
        hasFlippedCard=true
        firstCard=this
        return
    }

    secondCard=this
    hasFlippedCard=false

    checkForMatch()
    }

    function checkForMatch() {
        let isMatch=firstCard.dataset.value === secondCard.dataset.value
        isMatch ? (disableCards(),matchedPairs++,checkVictory()) : unflipCards()
    }

    function disableCards(){
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)

        resetBoard()
    }

function unflipCards(){
    lockBoard=true

    setTimeout(()=>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        lockBoard=false
        resetBoard()
    },1300)}

    function resetBoard() {
        [hasFlippedCard, lockBoard]=[false, false]
        [firstCard, secondCard]=[null, null]
    }

    function checkVictory() {
        if (matchedPairs === totalPairs) {
            setTimeout(() => {
                showVictoryPopup()
            }, 500)
        }
    }

    cards.forEach(card => card.addEventListener('click', flipCard))
    }

function difficultyMedium(){
    document.getElementById("Difficulty").style.display="none"
    document.getElementById("title").style.display="none"
    document.getElementById("home").style.display="block"
        
    const cards=document.querySelectorAll("#frases-memory")
    cards.forEach(element=> element.style.display="flex")
        
    let hasFlippedCard=false
    let lockBoard=false
    let firstCard, secondCard
    let matchedPairs = 0
    const totalPairs = cards.length / 2

    const cardsArray = Array.from(cards);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
        
    function flipCard() {
        if(lockBoard) return
        if(this === firstCard) return
    
        this.classList.add('flip')
    
        if(!hasFlippedCard){
            hasFlippedCard=true
            firstCard=this
            return
        }
    
        secondCard=this
        hasFlippedCard=false
    
        checkForMatch()
    }
    
    function checkForMatch() {
        let isMatch=firstCard.dataset.value === secondCard.dataset.value
        isMatch ? (disableCards(),matchedPairs++,checkVictory()) : unflipCards()
    }
    
    function disableCards(){
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    
        resetBoard()
    }
    
    function unflipCards(){
        lockBoard=true
    
        setTimeout(()=>{
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
    
        lockBoard=false
        resetBoard()
      },1800)}
    
    function resetBoard() {
        [hasFlippedCard, lockBoard]=[false, false]
        [firstCard, secondCard]=[null, null]
    }

    function checkVictory() {
        if (matchedPairs === totalPairs) {
            setTimeout(() => {
                showVictoryPopup()
            }, 500)
        }
    }

    cards.forEach(card => card.addEventListener('click', flipCard))
}

function difficultyHard(){
    document.getElementsByClassName("memory-game")[0].style.width="1280px"
    document.getElementsByClassName("memory-game")[0].style.height="609.99px"
    const allCards=document.querySelectorAll(".memory-card")
    allCards.forEach(card=>card.style.height="203.33px")

    document.getElementById("Difficulty").style.display="none"
    document.getElementById("title").style.display="none"
    document.getElementById("home").style.display="block"
    
    const cards=document.querySelectorAll(".memory-card")
    cards.forEach(element=> element.style.display="flex")
    
    let hasFlippedCard=false
    let lockBoard=false
    let firstCard, secondCard
    let matchedPairs = 0
    const totalPairs = cards.length / 2

    const cardsArray = Array.from(cards);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    
    function flipCard() {
        if(lockBoard) return
        if(this === firstCard) return
    
        this.classList.add('flip')
    
        if(!hasFlippedCard){
            hasFlippedCard=true
            firstCard=this
            return
        }
    
        secondCard=this
        hasFlippedCard=false
    
        checkForMatch()
    }
    
    function checkForMatch() {
        let isMatch=firstCard.dataset.value === secondCard.dataset.value
        isMatch ? (disableCards(),matchedPairs++,checkVictory()) : unflipCards()
    }
    
    function disableCards(){
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    
        resetBoard()
    }
    
    function unflipCards(){
        lockBoard=true
    
        setTimeout(()=>{
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
    
        lockBoard=false
        resetBoard()
      },1600)}
    
    function resetBoard() {
        [hasFlippedCard, lockBoard]=[false, false]
        [firstCard, secondCard]=[null, null]
    }
    
    function checkVictory() {
        if (matchedPairs === totalPairs) {
            setTimeout(() => {
                showVictoryPopup2()
            }, 500)
        }
    }

    cards.forEach(card => card.addEventListener('click', flipCard))
}

function showVictoryPopup(){
    document.getElementById("victory").style.display="block"
}   
function showVictoryPopup2(){
    document.getElementById("victory2").style.display="block"
}