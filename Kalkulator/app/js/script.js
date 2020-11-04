const calcScreen = document.querySelector(".calculator-screen")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")
const percents = document.querySelector(".percantage")


// Variable Numbers
let prevNumb = ''
let calculationOperator = ''
let currentNumb = '0'

// Update Calc Screen
const updateScreen = (number) => {
    calcScreen.value = number
}

// Input Number
const inputNumber = (number) => {
    if (currentNumb === '0') {
        currentNumb = number 
    } else {
        currentNumb += number
    }
}

// Input Operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumb = currentNumb
    }
    prevNumb = currentNumb
    calculationOperator = operator
    currentNumb = '0'
}

// Make Calculation
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumb)
    // console.log('equal button pressed')
})

// Make Clear
clearBtn.addEventListener('click', () => {
    // console.log('button pressed')
    clearAll()
    updateScreen(currentNumb)
})

// Add decimal Number
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumb)
    console.log("decimal button pressed")
})

// Take numbers value
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        inputNumber(event.target.value)
        updateScreen(currentNumb)
        // updateScreen(event.target.value)
        console.log(event.target.value)
    })
})

// Take operators
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        // inputNumber(event.target.value)
        inputOperator(event.target.value)
        console.log(event.target.value)
        updateScreen(event.target.value)
    })
})

// Clear All
const clearAll = () => {
    prevNumb = ''
    calculationOperator = ''
    currentNumb = ''
}

// Input Decimal
inputDecimal = (dot) => {
    if (currentNumb.includes('.')) {
        return
    }
    currentNumb += dot
}

// Start Calculation
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumb) + parseFloat(currentNumb)
            break
        case "-":
            result =  prevNumb - currentNumb
            break
        case "*":
            result = prevNumb * currentNumb
            break
        case "/":
            result = prevNumb / currentNumb
            break
        default:
            break 
    }
    currentNumb = result
    calculationOperator = ''
}

