/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//const phrase = new Phrase();
//const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);


// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//game.getRandomPhase().addPhraseToDisplay();
let game = new Game();;

document.querySelector("#btn__reset").addEventListener("click", () => {
    game.gameOver();
    game.startGame();
})

document.querySelectorAll("button.key").forEach((el) => {
    el.addEventListener('click', (e) => {
        game.handleInteraction(e)
    });   
});

