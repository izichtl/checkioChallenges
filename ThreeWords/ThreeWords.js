function threeWords(text) {
    var regex = /(\s?[a-z]+\s?)(\s?[a-z]+\s?)(\s?[a-z]+\s?)/gi;
    var testText = text.match(regex);
    return testText;
}
console.log('Example:');
console.log(threeWords("Hello World hello"), true);
console.log(threeWords("He is 123 man"), false);
/*
assert.equal(threeWords("Hello World hello"), true)
assert.equal(threeWords("1 2 3 4"), false)
assert.equal(threeWords("bla bla bla bla"), true)
assert.equal(threeWords("Hi"), false)
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!")
*/ 
