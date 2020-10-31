function removeAllBefore(values, b) {
    var isObject = typeof (b) === 'object';
    var isNumber = typeof (b) === 'number';
    var responseArray = [];
    var responseEmpty = [];
    if (isObject) {
        return responseEmpty;
    }
    if (isNumber) {
        if (values.indexOf(b) == -1) {
            return values;
        }
        else {
            var cut = values.indexOf(b);
            responseArray = values.slice(cut, values.length);
            return responseArray;
        }
    }
}
console.log('Example:');
console.log(removeAllBefore([1, 2, 3, 4, 5], 99));
console.log('--------------------------------');
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));
console.log('-----------------------------------');
