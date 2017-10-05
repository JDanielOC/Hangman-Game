//law and order hangman game
/* JAVASCRIPT 
	================================

	Game will be designed with a list of variables. Repetition is a concern. I have 20 words in an array. I'd like it to pull a random word from the array to use for the game and not repeat. 

	Also would like a prompt if a key other than a letter is chosen. "that is not a letter"
*/

// game words

var gameDictionary = ["criminal", 
"justice", 
"heinous", 
"felonies", 
"detective", 
"investigate", 
"innocent", 
"guilty", 
"sentencing", 
"jury", 
"judge", 
"testify", 
"counselor", 
"testimony", 
"attorney", 
"inspector", 
"perp", 
"acquittal", 
"arraignment", 
"hearsay"];

// choose a random word from gameDictionary

var getGameWord = function() {
	return gameDictionary[Math.floor(Math.random()*gameDictionary.length)];

}

var gameWord = getGameWord();

	document.getElementById("gameWord").textContent = gameWord;



//Answers

// var guessLetter = [];

// for (var i = 0;i<gameWord.length; i++) {

// 	guessLetter[i] = "_";

// };


// //Unguessed Letters - what is left

// var unguessedLetters = gameWord.length;

// //the game

// while (unguessedLetters > 0){
// 	document.write(guessLetter.join(" "));

// var guess=document.write("We're going to need a letter.");

// 	if(guess===null) {
// 		break;
// 	} 
// 	for(var j=0;j<gameWord.length;j++) {
// 		if(gameWord[j]===guess;

// 			unguessedLetters--;
// 	}

// 	}
// 	}
// }

// document.write(guessLetter.join(" "));

// document.write("Congratulations. Justice has been served.")









//begin onkeyup "Press Any Key To Get Started!"

// object.onkeyup = function(){myScript};

// If the word is madonna, display when game starts: _ _ _ _ _ _ _.


// As the user guesses the correct letters, reveal them: m a d o _  _ a.
//Use key events to listen for the letters that your players will type.

// object.addEventListener("keyup", myScript);

//Display the following on the page:

// Press any key to get started!

// Wins: (# of times user guessed the word correctly).

// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// As the user guesses the correct letters, reveal them: m a d o _  _ a.

// Number of Guesses Remaining: (# of guesses remaining for the user).

// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

// After the user wins/loses the game should automatically choose another word and make the user play it.