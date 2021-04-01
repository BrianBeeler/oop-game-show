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
    }
    handleInteraction(event) {
        let letter = event.target.innerHTML;
        console.log("Letter", letter);

        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchLetter(letter)
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            event.target.classList.add("wrong")
            this.removeLife()
        }
    }

    checkForWin() {
        return document.querySelectorAll('letter').reduce((acc, curr) => {
            return !("hide" in curr.classList || acc === false)
        }, true)
    }

    removeLife( ) {
        lifeRemoved = false;
        document.querySelectorAll(".tries").forEach((el)=> {
            if (!lifeRemoved && el.src === "images/liveHeart.png") {
                el.src = "images/lostHeart.png";
            }
        })
        this.missed++;


        if (missed === 5) {
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
    }
}

