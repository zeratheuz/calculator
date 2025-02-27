function add(num1, num2) {
  return +num1 + +num2
}

function subtract(num1, num2) {
  return +num1 - +num2
}

function multiply(num1, num2) {
  if (num2 == '') { num2 = 1 }
  return +num1 * +num2
}

function divide(num1, num2) {
  if (num2 == '') { num2 = 1 }
  return +num1 / +num2
}

function operate(num1, operator, num2 = 0) {
  switch (operator) {
    case '+':
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case '*':
      num1 ?? 1
      return multiply(num1, num2)
    case '/':
      num1 ?? 1
      return divide(num1, num2)
    default:
      return num1
  }
}

const display = document.querySelector(".display")
const buttons = document.querySelectorAll('button')
let currentOperator = '+'
let currentResult = 0

buttons.forEach(button => {
  button.addEventListener('click', () => {

    if (button.className.includes('dot')) {
      display.textContent += '.'
    }

    if (display.textContent == 'bro stop' ||
      display.textContent == 'NaN' ||
      display.textContent == '0') { display.textContent = '' }

    if (button.className.includes('number') &&
      display.textContent == currentResult) {
      display.textContent = ''
    }

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
        if (display.textContent !== 'NaN') {
          display.textContent += button.textContent
        }

      } else if (display.textContent.includes('-')) {
        result(display, '-')
        if (display.textContent !== 'NaN') {
          display.textContent += button.textContent
        }

      } else if (display.textContent.includes('*')) {
        result(display, '*')
        if (display.textContent !== 'NaN') {
          display.textContent += button.textContent
        }

      } else if (display.textContent.includes('/')) {
        result(display, '/')
        if (display.textContent !== 'NaN') {
          display.textContent += button.textContent
        }

      } else {
        display.textContent += button.textContent
      }
    }

    if (button.className.includes('result') &&
      display.textContent != 0) {
      result(display, currentOperator)
      if (display.textContent == 'NaN') {
        display.textContent = 'bro stop'
      }
    }

    if (button.textContent == '⌫') {
      display.textContent = display.textContent.slice(0, -1)
    }

    if (button.textContent == 'AC' ||
      display.textContent == '') { display.textContent = 0 }
  })
})

function result(node, operator) {
  const numbers = node.textContent.split(operator)
  const result = operate(numbers[0], operator, numbers[1])
  node.textContent = Number(Math.round(result + 'e2') + 'e-2')
  currentResult = node.textContent
}
