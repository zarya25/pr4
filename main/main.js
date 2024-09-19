'use strict'

// 1 задание
function printEvenNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}

let a = parseInt(prompt("Введите a"));
let b = parseInt(prompt("Введите b"));

printEvenNumbers(a, b);

//   2 задание
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// 3 задание
while (true) {
    let num = prompt("Введите число больше 10");

    if (num === null || num > 10) {
        break;
    }
}

// 4 задание
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
// 5 задание
const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
// 6 задание
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
  }
  
  console.log(checkAge(20)); 
  console.log(checkAge(16)); 
  
  
  
  
