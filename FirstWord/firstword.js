function firstWord(text) {
    var regex = /[a-z']+/i;
    var testText = text.match(regex);
    if (!testText) {
        return "ERROR";
    }
    if (testText) {
        var response = testText.toString();
        return response;
    }
}
console.log('Example:');
console.log(firstWord("hi"), " >> hi");
console.log(firstWord(" a word "), " >> a");
console.log(firstWord("don't touch it"), " >> don't");
console.log(firstWord("Hello world"), " >> Hello");
console.log(firstWord("greetings, friends"), " >> greetings");
console.log(firstWord("Hello world"), " >> Hello");
console.log(firstWord("... and so on ..."), " >> and");
/*
console.log("Coding complete? Click 'Check' to earn cool rewards!");
*/ 
