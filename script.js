//Переменные

const slovar = {
  words: {
    word0: {
      original: "dog",
      translation: "собака",
    },
    word1: {
      original: "cat",
      translation: "кошка",
    },
    word2: {
      original: "fish",
      translation: "рыба",
    },
  },
  wordsCount: 3,
};

const messages = {
  start: {
    hello: "Здорово чувак!",
  },
  result: {
    finishSuccess: "Молодец",
    finishUnSuccess: "Ты дебил",
  },
};

const settings = {
  correctAnswersMinPercent: 50,
};
const result = {
  correctAnswersCount: 0,
};

alert(messages.start.hello);
//Слово 0

const userAnswer0 = prompt(slovar.words.word0.original);

if (userAnswer0 === slovar.words.word0.translation) {
  result.correctAnswersCount = result.correctAnswersCount + 1;
}
if (userAnswer0 === slovar.words.word0.translation) {
  alert("Правильно");
} else {
  alert("Не правильно");
}
document.write("Твой ответ №1:" + "<br>" + userAnswer0 + "<br>");
if (userAnswer0 === slovar.words.word0.translation) {
  document.write("Правильно" + "<br>");
} else {
  document.write("Не правильно" + "<br>");
}

//Слово 1

const userAnswer1 = prompt(slovar.words.word1.original);

if (userAnswer1 === slovar.words.word1.translation) {
  result.correctAnswersCount = result.correctAnswersCount + 1;
}
if (userAnswer1 === slovar.words.word1.translation) {
  alert("Правильно");
} else {
  alert("Не правильно");
}
document.write("Твой ответ №2:" + "<br>" + userAnswer1 + "<br>");
if (userAnswer1 === slovar.words.word1.translation) {
  document.write("Правильно" + "<br>");
} else {
  document.write("Не правильно" + "<br>");
}

//Слово 2

const userAnswer2 = prompt(slovar.words.word2.original);

if (userAnswer2 === slovar.words.word2.translation) {
  result.correctAnswersCount = result.correctAnswersCount + 1;
}
if (userAnswer2 === slovar.words.word2.translation) {
  alert("Правильно");
} else {
  alert("Не правильно");
}
document.write("Твой ответ №3:" + "<br>" + userAnswer2 + "<br>");
if (userAnswer2 === slovar.words.word2.translation) {
  document.write("Правильно" + "<br>");
} else {
  document.write("Не правильно" + "<br>");
}

//Результат

const userCorrectAnswersPecent =
  (result.correctAnswersCount / slovar.wordsCount) * 100;

if (userCorrectAnswersPecent > settings.correctAnswersMinPercent) {
  alert(messages.result.finishSuccess);
} else {
  alert(messages.result.finishUnSuccess);
}
