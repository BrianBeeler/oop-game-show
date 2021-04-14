/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(phrase) {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    createPhrases() {
         return [new Phrase("Phrase I like"),
                 new Phrase("Phrase I do not like"),
                 new Phrase("Another Phrase"),
                 new Phrase("A simple phrase"),
                 new Phrase("a phrase from the heart")]       
    }
    getRandomPhase() {
        let index = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[index]
    }
    startGame() {
        document.querySelector("#overlay").classList.add("hide");
        this.activePhrase = this.getRandomPhase();
        this.activePhrase.addPhraseToDisplay();
        document.querySelector("#overlay").classList.remove("win");
        document.querySelector("#overlay").classList.remove("lose");

    }
    handleInteraction(event) {
        let letter = event.target.innerHTML;
        console.log("Letter", letter);

        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchLetter(letter)
            event.target.classList.add("chosen")
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            event.target.classList.add("wrong")
            this.removeLife()
        }
        event.target.disabled = true;
    }

    checkForWin() {
        let letters = document.querySelectorAll('.letter');
        let win = true;

        letters.forEach((el) => {
            console.log(el.classList)
            if (el.classList.contains('hide')) {
                win = false;
            }
        })
        
        return win;
        
    }

    removeLife( ) {
        let lifeRemoved = false;
        document.querySelectorAll(".tries > img").forEach((el)=> {
            console.log("tries element", el)
            if (!lifeRemoved && el.src.includes("images/liveHeart.png")) {
                console.log("triggered!")
                el.src = "images/lostHeart.png";
                lifeRemoved = true
            }
        })
        this.missed++;


        if (this.missed === 5) {
            this.gameOver()
        }
    }

    gameOver() {
        document.querySelector("#overlay").classList.remove("hide");
        document.querySelector("#overlay").classList.remove("start");
        if (this.missed === 5) {
            document.querySelector("#overlay").classList.add("lose");
            document.querySelector("#game-over-message").innerHTML = "Lost!!"
        } else {
            document.querySelector("#overlay").classList.add("win");
            document.querySelector("#game-over-message").innerHTML = "Win!!"
        }
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        document.querySelector('#phrase').innerHTML = `<ul></ul>`;
        document.querySelectorAll(".wrong").forEach((el) => {
            el.classList.remove("wrong");
            el.disabled = false;
        })
        document.querySelectorAll(".chosen").forEach((el) => {
            el.classList.remove("chosen");
            el.disabled = false;
        })
        document.querySelectorAll(".tries > img").forEach((el)=> { 
            el.src = "images/liveHeart.png";
        });
        document.querySelectorAll(".key").forEach((el) => {
            el.removeAttribute('disabled');
        });

    }
}

