const reverseString = function(userWord) {
    let newWord = "";
    for (let i = userWord.length - 1; i >= 0; i--) {
        newWord += userWord.charAt(i);
    }
    return newWord;

};

// Do not edit below this line
module.exports = reverseString;
