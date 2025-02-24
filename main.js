function add(num1, num2) {
  return +num1 + +num2
}

function subtract(num1, num2) {
  return +num1 - +num2
}

function multiply(num1, num2) {
  return +num1 * +num2
}

function divide(num1, num2) {
  return +num1 / +num2
}

let num1 = 0
let num2 = 0
let operator = ''

function operate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case '*':
      return multiply(num1, num2)
    case '/':
      return divide(num1, num2)
  }
}

const display = document.querySelector(".display")
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (display.textContent == 0) { display.textContent = '' }
    if (display.textContent.length < 8
      && button.className == 'number') {
      display.textContent += button.textContent
    }
    if (button.textContent == 'AC') { display.textContent = 0 }
  })
})