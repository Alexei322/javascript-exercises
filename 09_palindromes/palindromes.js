const palindromes = function (word) {

    const re = /[\W_]/g;
 
    wordClean = word.toLowerCase().replace(re, '');
    
    reverseStr = wordClean.split('').reverse().join('');

    if(wordClean === reverseStr) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
