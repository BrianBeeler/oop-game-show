/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {

        let that = this;

        document.querySelector("#phrase").appendChild(function() {
            let template = ``;
     
            that.phrase.split("").forEach((char) => {
                if (char.match(/[a-z]/i)) {
                    template += `<li class='hide letter`+char+`'>`+char+`</li>`
                } else {
                  template +=  `<li class="space"> </li>`
                }
            });

            console.log(template);

            let ul = document.createElement('ul');
            ul.innerHTML = template;

            return ul
        }());
    }

    checkLetter(letter) {
        return letter in this.phrase;
    }

    showMatchLetter(letter) {
        document.querySelectorAll("."+letter).forEach((el)=> {
            el.classList.remove("hide");
        })
    }
            
}

{/* <div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div> */}