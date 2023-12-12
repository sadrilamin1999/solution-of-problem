// write a function called getSum that takes two numbers and returns the sum of those two numbers

function getSum(num1, num2) {
  return num1 + num2;
}
console.log(getSum(15, 25));

// write a function called calculator that takes in 2 numbers and an operator and return the result of the calculation

function calculator(number1, number2, operator) {
  /* switch (operator) {
    case "+":
      return number1 + number2;
      break;
    case "-":
      return number1 - number2;
      break;
    case "*":
      return number1 * number2;
      break;
    case "/":
      return number1 / number2;
      break;
    default:
      throw new Error("not a valid operator");
  } */
  // simplified the code

  if (operator == "+") return number1 + number2;
  if (operator == "-") return number1 - number2;
  if (operator == "*") return number1 * number2;
  if (operator == "/") return number1 / number2;

  throw new Error("Not a valid operator");
}
console.log(calculator(45, 25, "+"));
