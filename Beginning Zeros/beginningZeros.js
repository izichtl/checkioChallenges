function beginningZeros(text) {
    var contador = 0;
    var newArray = [];
    var stringArray = text.split('');
    stringArray.forEach(function (i) {
        newArray.push(Number(i));
    });
    var len = newArray.length;
    for (var i = 0; i < len; i++) {
        var skip = newArray[i] == 0;
        if (!skip) {
            return contador;
        }
        if (skip) {
            contador++;
        }
    }
    return contador;
}
console.log('Example:');
console.log(beginningZeros('001001'), 2);
console.log(beginningZeros('100'), 0);
console.log(beginningZeros('00000100'), 5);
console.log(beginningZeros('100'), 0);
console.log(beginningZeros('001'), 2);
console.log(beginningZeros('100100'), 0);
console.log(beginningZeros('012345679'), 1);
console.log(beginningZeros('0000'), 4);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
