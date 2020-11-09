function secondIndex(text, symbol) {
    // your code here
    var textSplit = text.split('');
    var matchCount = 0;
    var response;
    for (var i = 0; i < (textSplit.length); i++) {
        var checkFirst = symbol == textSplit[i];
        if (checkFirst) {
            matchCount++;
            if (matchCount == 2) {
                response = i;
            }
        }
    }
    return response;
}
console.log('Example');
console.log(secondIndex("sims", "s"), 3);
// These "asserts" are used for self-checking and not for an auto-testing
console.log(secondIndex("sims", "s"), 3);
console.log(secondIndex("find the river", "e"), 12);
console.log(secondIndex("hi", " "), undefined);
console.log(secondIndex("hi mayor", " "), undefined);
console.log(secondIndex("hi mr Mayor", " "), 5);
console.log("You are awesome! All tests are done! Go Check it!");
/*
*/ 
