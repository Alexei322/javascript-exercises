const sumAll = function(num1, num2) {
    let total = 0;
    let greaterNum = 0;
    let smallerNum = 0;
    if((num1 < 0) || (num2 < 0) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    greaterNum = num1 > num2 ? num1 : num2;
    smallerNum = num1 > num2 ? num2 : num1; 
    for (let i = smallerNum; i <= greaterNum; i ++) {
        total += i;
    }
    return total

};

// Do not edit below this line
module.exports = sumAll;
