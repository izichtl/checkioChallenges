"use strict";
exports.__esModule = true;
function frequencySort(data) {
    if (data == undefined)
        return [];
    var array = new Array();
    var response = new Array();
    var uniqueChars = new Set(data);
    var uniqueArray = Array.from(uniqueChars);
    uniqueArray.forEach(function (e, index) {
        var frequency = 0;
        data.forEach(function (elemento) {
            if (elemento === uniqueArray[index])
                frequency++;
        });
        array.push([uniqueArray[index], frequency]);
    });
    array.sort(function (a, b) {
        return b[1] - a[1];
    });
    array.forEach(function (e) {
        for (var i = 0; i < e[1]; i++) {
            response.push(e[0]);
        }
    });
    return response;
}
console.log('Example:');
frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2];
// assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
frequencySort(['bob', 'bob', 'carl', 'alex', 'alex', 'alex', 'alex', 'bob']);
// assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
// frequencySort([]), [];
// assert.deepEqual(frequencySort([]), []);
// assert.deepEqual(frequencySort([1]), [1]);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
