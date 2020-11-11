function popularWords(text, words) {
    words.forEach(function (i) {
        var regexCheck = new RegExp(i, "gi");
        var checkM = text.match(regexCheck);
        if (checkM) {
            var count = checkM.length;
            console.log(checkM, count);
        }
    });
    return {};
}
console.log('Example:');
console.log(popularWords("\nWhen I was One\nI had just begun\nWhen I was Two\nI was nearly new", ['i', 'was', 'three', 'near']));
