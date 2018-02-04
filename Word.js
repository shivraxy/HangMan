var Letter = require('./Letter.js');

Word = function(wordChar) {

    this.wordArr = [];
    this.currentState = [];

    this.assign = function() {
        for (let i = 0; i < wordChar.length; i++) {
            this.wordArr[i] = new Letter(wordChar[i])
        }
    }

    this.display = function() {
        this.currentState = []; //reset it everytime
        console.log("Display : No of Chars >> " + this.wordArr.length);
        for (var i = 0; i < this.wordArr.length; i++) {
            this.currentState.push(this.wordArr[i].getChars());
        }
        console.log(this.currentState.join(' '));
    }

    this.guess = function(guessChar) {

        for (var i = 0; i < this.wordArr.length; i++) {
            this.wordArr[i].checkChar(guessChar);
        }
    }

}


wordChar = "Kingdom";

var word = new Word(wordChar);
word.assign();
word.display();
word.guess('g');
word.guess('K');
word.display();