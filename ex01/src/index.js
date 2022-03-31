function main(numOne, numTwo) {
  // Only change code below this line
  var numOne;
  var numTwo;
  var quotient;
  if (numTwo == 0) {
    quotient = "Divide by 0! Cannot divide by zero!";
  } else {
    // Only change code below this line
    quotient = numOne / numTwo;

    // Only change code above this line
  }

  return quotient;
}
console.log(main(15, 3));
module.exports = main;
