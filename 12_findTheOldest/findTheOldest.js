const findTheOldest = function(peeps) {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();

    return peeps.reduce(function(a,b) {
        if(a.yearOfDeath === undefined) {
            a.yearOfDeath = 2022;
        }
        aAge = a.yearOfDeath - a.yearOfBirth
        bAge = b.yearOfDeath - b.yearOfBirth
        return aAge < bAge ? b : a;
});
    
};
// Do not edit below this line
module.exports = findTheOldest;
