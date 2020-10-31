function isAllUpper(text) {
    var regex = /\w/g;
    var checkString = text.match(regex);
    var response = true;
    if (!checkString) {
        return true;
    }
    for (var i = 0; i <= (checkString.length - 1); i++) {
        var checkUp = checkString[i] == checkString[i].toUpperCase();
        if (!checkUp) {
            response = false;
        }
    }
    return response;
}
console.log('Example:');
console.log(isAllUpper('ALL UPPER'));
console.log(isAllUpper('ALL UPPER'), true);
console.log(isAllUpper('all lower'), false);
console.log(isAllUpper('mixed UPPER and lower'), false);
console.log(isAllUpper(''), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
