const repeatString = function(userStr, userNum) {
    let returnVal = "";
    if(userNum < 0) {
        returnVal = "ERROR";
    }
    for(let i = 0; i < userNum; i++) {
        returnVal += userStr;

    }
    return returnVal;

};

// Do not edit below this line
module.exports = repeatString;
