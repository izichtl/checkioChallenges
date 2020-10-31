function splitPairs(text) {
    var stringArray = text.split('');
    var len = stringArray.length - 1;
    var isEven = len % 2;
    var responseArray = [];
    if (!isEven) {
        stringArray.push('_');
    }
    for (var i = 0; i <= len; i += 2) {
        var concat = stringArray[i] + stringArray[i + 1];
        responseArray.push(concat);
    }
    return responseArray;
}
console.log('Example:');
console.log(splitPairs('abc'), ['ab', 'c_']);
console.log(splitPairs('a'), ['a_']);
console.log(splitPairs(''), []);
console.log(splitPairs('abcd'), ['ab', 'cd']);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
