function popularWords(text, words) {
    var response = {};
    words.forEach(function (e) {
        var count = 0;
        var string = "[^a-z]" + e + "[^a-z]|" + e + "$|^" + e + "\\s";
        var regex = new RegExp(string, 'ig');
        var match = text.match(regex);
        if (match)
            count = match.length;
        response[e] = count;
    });
    return response;
}
console.log('Example:');
console.log(popularWords("\nWhen I was One\nI had just begun\nWhen I was Two\nI was nearly new", ['i', 'was', 'three', 'near']));
console.log(popularWords("It's flying from somewhere\nAs fast as it can\nI couldn't keep up with it\nNot if I ran", ["it's", "ran", "i"]));
console.log(popularWords("And the Raven never flitting still is sitting still is sitting\nOn the pallid bust of Pallas just above my chamber door\nAnd his eyes have all the seeming of a demon’s that is dreaming\nAnd the lamp-light o’er him streaming throws his shadow on the floor\nAnd my soul from out that shadow that lies floating on the floor\nShall be lifted nevermore", ["raven", "still", "is", "floor", "nevermore"]));
console.log(popularWords("\nAnd the Raven never flitting still is sitting still is sitting\nOn the pallid bust of Pallas just above my chamber door\nAnd his eyes have all the seeming of a demon\u2019s that is dreaming\nAnd the lamp-light o\u2019er him streaming throws his shadow on the floor\nAnd my soul from out that shadow that lies floating on the floor\nShall be lifted nevermore", ["raven", "still", "is", "floor", "nevermore"]));
console.log('Expected: {"raven":1,"still":2,"is":3,"floor":2,"nevermore":1}');
