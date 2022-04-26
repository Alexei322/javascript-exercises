const removeFromArray = function(userArr, ...item) {

    for(let i = userArr.length - 1; i >= 0; i--) {
        console.log(i, userArr[i])
        if(item.includes(userArr[i])) {
            console.log("Removed", userArr[i]);
            userArr.splice(i, 1);
        }
    }
    return userArr;
}
  


// Do not edit below this line
module.exports = removeFromArray;
