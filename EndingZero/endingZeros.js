function endZeros(values) {
    var contador = 0;
    var newArray = [];
    var textNumber = values.toString();
    var stringArray = textNumber.split('');
    stringArray.forEach(function (i) {
        newArray.unshift(Number(i));
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
console.log(endZeros(0), 1);
console.log(endZeros(1), 0);
console.log(endZeros(10), 1);
console.log(endZeros(101), 0);
console.log(endZeros(245), 0);
console.log(endZeros(100100), 2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
