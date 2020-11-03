function threeWords(text) {
    var regex = /(\s?[a-z]+\s[a-z]+\s[a-z]+\s?)/gi;
    var testText = text.match(regex);
    if (!testText) {
        return false;
    }
    return true;
}
console.log('Example:');
console.log(threeWords("Hello World hello"), true);
console.log(threeWords("He is 123 man"), false);
console.log(threeWords("bla bla bla bla"), true);
console.log(threeWords("Hello World hello"), true);
console.log(threeWords("1 2 3 4"), false);
console.log(threeWords("Hi"), false);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
/*
*/ 
