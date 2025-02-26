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
const operators = ['+', '-', '*', '/']
let currentOperator = ''

buttons.forEach(button => {
  button.addEventListener('click', () => {

    if (button.className.includes('dot')) {
      display.textContent += '.'
    }

    if (display.textContent == '0') { display.textContent = '' }

    if (button.className.includes('number')
      && display.textContent.length < 13) {
      display.textContent += button.textContent
    }

    if (button.className.includes('operator')
      && display.textContent.length < 13
      && display.textContent.length > 0) {
      currentOperator = button.textContent

      if (display.textContent.includes('+')) {
        result(display, '+')
        display.textContent += button.textContent
      } else if (display.textContent.includes('-')) {
        result(display, '-')
        display.textContent += button.textContent
      } else if (display.textContent.includes('*')) {
        result(display, '*')
        display.textContent += button.textContent
      } else if (display.textContent.includes('/')) {
        result(display, '/')
        display.textContent += button.textContent
      } else {
        display.textContent += button.textContent
      }
    }

    if (button.className.includes('result')) {
      result(display, currentOperator)
    }

    if (button.textContent == 'AC') { display.textContent = 0 }
  })
})

function result(node, operator) {
  let numbers = node.textContent.split(operator)
  node.textContent = operate(numbers[0], operator, numbers[1])
}