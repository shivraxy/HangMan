Letter = function(char) {

    this.character = char;
    this.guessed = false;
    this.getChars = function() {
        if (this.guessed)
            return (char)
        else
            return ('_')
    }
    this.checkChar = function(inputCharacter) {
        if (this.character === inputCharacter)
            this.guessed = true;

    }
}

module.exports = Letter;

// var letter = new Letter('a');
// letter.checkChar('a');
// letter.display();