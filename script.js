'use strict'

function botGame(number) {

  number = prompt('Угадай число от 1 до 100');
  let luckyNumber = 11;

    if (number < 1 && number === null) {
      return alert("Игра окончена");
      }

    if (number > luckyNumber) {
      alert("Загаданное число меньше");
    return botGame();
    }

    else if (number < luckyNumber) {
      alert("Загаданное число больше");
    return botGame();
    }

    else if (isNaN(number)) {
      alert("Введи число!");
    return botGame();
    }

    else {
      alert("Поздравляю, Вы угадали!!!");
    return;
    }

}

botGame(11);