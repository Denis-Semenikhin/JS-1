const word0 = "dog";
const world0Translation = "собака";

const word1 = "cat";
const world1Translation = "кошка";

const word2 = "fish";
const world2Translation = "рыба";

const wordsCount = 3;

const finishSuccessMessage = "Молодец";
const finishUnSuccessMessage = "Ты дебил";

let correctAnswersCount = 0;

const correctAnswersMinPercent = 50;

//---------

const userAnswer0 = prompt(word0); //0
alert(userAnswer0 === world0Translation);
if (userAnswer0 === world0Translation) {
  correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer1 = prompt(word1); //1
alert(userAnswer1 === world1Translation);
if (userAnswer1 === world1Translation) {
  correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer2 = prompt(word2); //2
alert(userAnswer2 === world2Translation);
if (userAnswer2 === world2Translation) {
  correctAnswersCount = correctAnswersCount + 1;
}

const userCorrectAnswersPecent = (correctAnswersCount / wordsCount) * 100;

if (userCorrectAnswersPecent > correctAnswersMinPercent) {
  alert(finishSuccessMessage);
} else {
  alert(finishUnSuccessMessage);
}
