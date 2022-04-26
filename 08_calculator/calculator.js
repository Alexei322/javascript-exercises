const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(arr1) {
  if(arr1.length === 0){
    return 0;
  }
  else {
    return arr1.reduce((a,b) => a + b) 
  }
};

const multiply = function(arr1) {
  return arr1.reduce((a,b) => a * b)

};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
  if(num1 > 0) {
    return (num1 * factorial(num1 - 1));
  } 
  else if (num1 === 0) {
    return 1;
  } else {
    return -1;
  }
  
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
