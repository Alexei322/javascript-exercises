const fibonacci = function(userNum) {
    let retVal = 0;
    let a = 1;
    let b = 0;
    let temp;
    if(userNum < 0) {
        return "OOPS"
    } else {
        if(typeof(userNum) === String) {
            userNum = parseInt(userNum);
        }
        while(userNum > 0) {
            temp = a;
            a = a + b;
            b = temp;
            userNum --;
        }
        return b;
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
