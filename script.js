'use strict'

function botGame() {
  let luckyNumber = 11;
  let number;
  number = prompt('Угадай число от 1 до 100');

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

    else if (number == luckyNumber) {
      alert("Поздравляю, Вы угадали!!!");
    return;
    }

    else if (number == null) {
      alert("Игра окончена");
    return;
    }

}

botGame();