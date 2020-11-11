function splitList(values) {
    var arrA = [];
    var arrB = [];
    var arrAlength = 0;
    var arrBlength = 0;
    var isEmpty = values.length == 0;
    if (isEmpty) {
        return [arrA, arrB];
    }
    else {
        var isEven = values.map(function (item) {
            var isEven = item % 2;
            return isEven;
        });
        var odds = isEven.reduce(function (anterior, novo) {
            return anterior + novo;
        });
        var evens = values.length - odds;
        var moreOdd = odds > evens;
        if (moreOdd) {
            var arrIsOdd = values.length % 2;
            var stopPush = 0;
            arrAlength = ((values.length - 1) / 2) + 1;
            arrBlength = values.length - arrAlength;
            for (var i = 0; i < (arrAlength); i++) {
                arrA.push(values[i]);
                stopPush++;
            }
            for (var i = 0; i < (arrBlength); i++) {
                arrB.push(values[stopPush]);
                stopPush++;
            }
        }
        else {
            var stopPush = 0;
            arrAlength = values.length / 2;
            arrBlength = arrAlength;
            for (var i = 0; i < (arrAlength); i++) {
                arrA.push(values[i]);
                stopPush++;
            }
            for (var i = 0; i < (arrBlength); i++) {
                arrB.push(values[stopPush]);
                stopPush++;
            }
        }
    }
    return [arrA, arrB];
}
console.log(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
console.log(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]]);
console.log(splitList([1, 2, 3]), [[1, 2], [3]]);
console.log(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
console.log(splitList([1]), [[1], []]);
console.log(splitList([]), [[], []]);
