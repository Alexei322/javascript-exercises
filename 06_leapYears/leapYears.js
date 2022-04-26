const leapYears = function(userYear) {
    if((userYear % 4) === 0) {
        if((userYear % 100) != 0 || (userYear % 400 === 0)) {
            return true;
        }     
    } else if (userYear % 400 === 0) {
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
