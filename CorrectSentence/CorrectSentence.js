function correctSentence(text) {
    var newString = text;
    var firstIsCapital = text.substring(0, 1);
    var checkUp = firstIsCapital == firstIsCapital.toUpperCase();
    if (!checkUp) {
        newString = text.charAt(0).toUpperCase() + text.slice(1);
    }
    var textLength = newString.length;
    var lastIsDot = text.substring(textLength - 1, textLength);
    var checkDot = lastIsDot == ".";
    if (!checkDot) {
        newString = newString + '.';
    }
    return newString;
}
console.log('Example:');
console.log(correctSentence('greetings, friends'));
console.log(correctSentence('Greetings, friends.'), 'Greetings, friends.'); /*
console.log(correctSentence('greetings, friends'), 'Greetings, friends.')
console.log(correctSentence('Greetings, friends'), 'Greetings, friends.')
console.log("Coding complete? Click 'Check' to earn cool rewards!")*/
