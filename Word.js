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
        for (var i = 0; i < this.wordArr.length; i++) {
            this.currentState.push(this.wordArr[i].getChars());
        }
        console.log(this.currentState.join(' '));
    }

    this.guess = function(guessChar) {
        var returnsum = 0
        var alldone = true;
        for (var i = 0; i < this.wordArr.length; i++) {
            num = this.wordArr[i].checkChar(guessChar)
            if (isNaN(num))
                num = 0;
            returnsum = returnsum + num;

            //checking if all characters have been gussed 

            if (this.wordArr[i].guessed === false)
                alldone = false;

        }

        if (alldone === false)
            return returnsum;
        else
            return 100099; // number to determine all the characters have been guessed
    }

}

module.exports = Word;