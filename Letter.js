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
        if (this.character.toUpperCase() === inputCharacter.toUpperCase()) {
            this.guessed = true;
            return 1;
        }

    }
}

module.exports = Letter;