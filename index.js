var inquirer = require('inquirer');
var Letter = require('./Word.js');
var chalk = require('chalk');
var request = require("request");
var fs = require("fs");

let vWon = 0,
    vLost = 0,
    vChances = 5;
let vGuessed = [];

function userInput() {
    inquirer.prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "Guess the word?",
            name: "word"
        }
    ]).then(function(inquirerResponse) {

        vGuessed.push(inquirerResponse.word);
        process.stdout.write('\x1Bc');
        scoreUpdate = word.guess(" ");
        scoreUpdate = word.guess(inquirerResponse.word);
        if (scoreUpdate == 0) vChances = vChances - 1;
        console.log(chalk.green("So Far you have .."))
        word.display();
        displayScore();
        if (vChances > 0) {

            if (scoreUpdate === 100099) {
                vWon = vWon + 1;
                process.stdout.write('\x1Bc');
                console.log(chalk.bgGreen(currentMovie));
                console.log(chalk.green('You Win !!!!!'));
                displayScore();
                play_again();
            } else
                userInput();
        } else {
            process.stdout.write('\x1Bc');
            console.log(chalk.red('Game Over'));
            vLost = vLost + 1;
            displayScore();
            play_again();
        }
    });
}

function play_again() {

    inquirer.prompt([
        // Here we create a basic text prompt.
        {
            type: "confirm",
            message: "Do you want play once again ?? ",
            name: "playagain",
            default: false
        }
    ]).then(function(inquirerResponse) {

        if (inquirerResponse.playagain === true) {
            vChances = 5;
            vGuessed = [];
            play();
        } else {
            process.stdout.write('\x1Bc');
            console.log(chalk.red(' Hang the Man !!'));
            return;
        }
    });

}

play();

function play() {
    moviePosition = Math.floor(Math.random() * 9)
    process.stdout.write('\x1Bc');
    console.log('Hint: Movie File array Number = ' + moviePosition);

    fs.readFile("Movies.txt", "utf8", function(error, data) {
        if (error)
            return console.log(error);
        data = data.replace(/\r|\n/g, '');
        var dataArr = data.split(",");
        currentMovie = dataArr[moviePosition]
            // uncomment to get movie name in the console 
            //console.log(dataArr[moviePosition].trim());

        word = new Word(dataArr[moviePosition]);
        word.assign();
        word.display();
        userInput();
    })
}


function displayScore() {
    console.log(chalk.green('Won :' + vWon));
    console.log(chalk.red('Lost :' + vLost));
    console.log(chalk.cyan('Guessed :') + vGuessed);
    console.log(chalk.bgMagenta('Chances Remaining :' + vChances));
}

// Get a Random movie name