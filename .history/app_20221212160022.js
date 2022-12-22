const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  power: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

const plusResult = calculator.plus(10, 20);
const minusResult = calculator.minus(plusResult, 10);
const powerResult = calculator.power(plusResult, minusResult);
const divideResult = calculator.divide(powerResult, minusResult);

const Results = { plusResult, minusResult, powerResult, divideResult };

console.log(Results);
