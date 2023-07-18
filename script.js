//Переменные
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

//Слово 0

const userAnswer0 = prompt(word0);

if (userAnswer0 === world0Translation) {
  correctAnswersCount = correctAnswersCount + 1;
}
if (userAnswer0 === world0Translation) {
  alert("Правильно");
} else {
  alert("Не правильно");
}
document.write("Твой ответ №1:" + "<br>" + userAnswer0 + "<br>");
if (userAnswer0 === world0Translation) {
  document.write("Правильно" + "<br>");
} else {
  document.write("Не правильно" + "<br>");
}

//Слово 1

const userAnswer1 = prompt(word1);

if (userAnswer1 === world1Translation) {
  correctAnswersCount = correctAnswersCount + 1;
}
if (userAnswer1 === world1Translation) {
  alert("Правильно");
} else {
  alert("Не правильно");
}
document.write("Твой ответ №2:" + "<br>" + userAnswer1 + "<br>");
if (userAnswer1 === world1Translation) {
  document.write("Правильно" + "<br>");
} else {
  document.write("Не правильно" + "<br>");
}

//Слово 2

const userAnswer2 = prompt(word2);

if (userAnswer2 === world2Translation) {
  correctAnswersCount = correctAnswersCount + 1;
}
if (userAnswer2 === world2Translation) {
  alert("Правильно");
} else {
  alert("Не правильно");
}
document.write("Твой ответ №3:" + "<br>" + userAnswer2 + "<br>");
if (userAnswer2 === world2Translation) {
  document.write("Правильно" + "<br>");
} else {
  document.write("Не правильно" + "<br>");
}

//Результат

const userCorrectAnswersPecent = (correctAnswersCount / wordsCount) * 100;

if (userCorrectAnswersPecent > correctAnswersMinPercent) {
  alert(finishSuccessMessage);
} else {
  alert(finishUnSuccessMessage);
}
