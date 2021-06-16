import { Calculator } from './calculator.js';

const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);
// nums = all number keys, including '.'
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalsButton = document.querySelector('[data-equals]');

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// NUMBER BUTTONS ***********************************************************
numberButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  })
);

// OPERATION BUTTONS *******************************************************
operationButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateDisplay();
  })
);

// RESET BUTTON ********************************************
resetButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

// EQUALS BUTTON ************************************
equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

// DELETE BUTTON **************
deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

/////////******************************************************* */
/////////******************************************************* */
/////////*********     THEME FUNCTIONALITY  ******************** */
/////////******************************************************* */
/////////******************************************************* */

// let currentTheme;
const labelBtns = document.querySelectorAll('.theme__label-btn');
const dotBtns = document.querySelectorAll('.theme__slider-position');
const [dot1, dot2, dot3] = dotBtns;
const themeBtns = [...labelBtns, ...dotBtns];
const html = document.querySelector('html');
const themes = { 1: 'default', 2: 'light', 3: 'dark' };
const themeNums = { default: 1, light: 2, dark: 3 };
let currentTheme = html.dataset.theme;

function initDot() {
  updateDot();
}
initDot();

// LISTEN FOR CLICKS ON THEME BUTTONS, BOTH LABELS AND DOTS
themeBtns.forEach((btn) => btn.addEventListener('click', updateTheme));

function updateDot() {
  dotBtns.forEach((dot) => dot.classList.remove('active'));
  dotBtns[themeNums[currentTheme] - 1].classList.add('active');
}

function updateTheme() {
  const clickedTheme = this.innerText; // number of theme as string
  if (themes[clickedTheme] === currentTheme) {
    console.log('that theme is already active');
    return;
  } else {
    currentTheme = themes[clickedTheme];
    html.dataset.theme = currentTheme;
    updateDot();
  }
}

// ***********CODE BEFORE A REFACTOR TO BUILD CALCULATOR CLASS*******
// Operation buttons ( +,-,x,/)
/***
 * 
 function handleOperationClick(e) {
   // case where you hit a second operator before equals
   if (!expression.operator) {
     console.log(expression.operator);
     // handleEvaluate();
    }
    //In the case that there is a value in display from last expression
    if (outputValue.textContent !== '0') {
      expression.firstTerm = parseInt(outputValue.textContent, 10);
    }
    
    if (!expression.firstTerm) {
      expression.firstTerm = parseInt(value, 10);
      value = ''; // clear value of first term after saved
      updateOutput(expression.firstTerm);
    }
    
    if (!expression.operator) {
      expression.operator = e.target.textContent;
    }
  }
  
  // operations is collection of btns
  operations.forEach((operation) => {
    operation.addEventListener('click', handleOperationClick);
  });
  
  // EQUALS key
  const handleEvaluate = function () {
    if (!expression.secondTerm) {
      expression.secondTerm = parseInt(value, 10);
    }
    switch (expression.operator) {
      case '+':
        let res = expression.firstTerm + expression.secondTerm;
        updateOutput(res.toString());
        break;
        case '-':
          updateOutput(expression.firstTerm - expression.secondTerm);
          break;
          case 'x':
            updateOutput(expression.firstTerm * expression.secondTerm);
            break;
            case '/':
              updateOutput(expression.firstTerm / expression.secondTerm);
            }
            
            // then result value and expression without clearing previous answer
            value = '0';
            expression = {};
          };
          
          equals.addEventListener('click', handleEvaluate);
          
          // DEL key functionality ------------DEL-----------
          function delete1(string) {
            const chars = string.split('');
            chars.pop();
            return chars.join('');
          }
          
          // DEL key CLICK EVENT
          del.addEventListener('click', () => {
            value = delete1(value);
            updateOutput(value);
          });
          // -------------------DEL-------------------------
          // RESET KEY
          reset.addEventListener('click', resetOutput);
          
          // reset display to empty string, but this does not result value variable
          function resetOutput() {
            value = '0';
            updateOutput(value);
          }
          
          function updateOutput(string) {
            outputValue.textContent = string;
          }
          
          // --------- THEME FUNCTIONALITY ------
          // TOGGLE FORM
          const togForm = document.querySelector('.toggle_radio');
          
          */
