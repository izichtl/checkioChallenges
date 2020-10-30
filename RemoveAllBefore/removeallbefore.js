function removeAllBefore(values, b) {
    function findB(array, index) {
        array.forEach(function (ele) {
            ele == b;
        });
    }
    console.log(values.find(findB));
    var cut = values.indexOf(b);
    var response = values.slice(cut, values.length);
    return response;
}
console.log('Example:');
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));
console.log("Coding complete? Click 'Check' to earn cool rewards!");
