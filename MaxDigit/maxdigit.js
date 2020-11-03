function maxDigit(value) {
    var vS = value.toString().split('');
    var vN = [];
    vS.forEach(function (i) {
        vN.push(Number(i));
    });
    console.log(typeof (vN), typeof (vN[0]));
    var sortedArray = vN.sort(function (n1, n2) { return n2 - n1; });
    return sortedArray[0];
}
console.log('Example:');
console.log(maxDigit(12345), 5);
console.log(maxDigit(0), 0);
console.log(maxDigit(52), 5);
console.log(maxDigit(634), 6);
console.log(maxDigit(1), 1);
console.log(maxDigit(10000), 1);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
