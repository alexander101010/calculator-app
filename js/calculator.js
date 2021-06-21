export class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number) {
    // prevent more than one decimal per operand
    if (number === '.' && this.currentOperand.includes('.')) return;
    // append number to currentOperand
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand.length === 0) return;
    // if there already is a previous operand and thus an operation, we want to compute before adding new operation to the result
    if (this.previousOperand !== '') {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand.toString();
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const firstTerm = parseFloat(this.previousOperand, 10);
    const secondTerm = parseFloat(this.currentOperand, 10);
    // Guard against equals press with only 1 operand ie 5+=
    if (isNaN(firstTerm) || isNaN(secondTerm)) return;
    switch (this.operation) {
      case '+':
        computation = firstTerm + secondTerm;
        break;
      case '-':
        computation = firstTerm - secondTerm;
        break;
      case 'x':
        computation = firstTerm * secondTerm;
        break;
      case '/':
        computation = firstTerm / secondTerm;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const numberString = number.toString();
    const integerDigits = parseFloat(numberString.split('.')[0]);
    const decimalDigits = numberString.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en');
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}
