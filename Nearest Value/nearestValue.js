function nearestValue(values, search) {
    var indexIsZero = search == 0;
    var isNegative = search < 0;
    if (isNegative) {
        var newSearch_1 = Math.abs(search);
        var atual_1 = values[0] - newSearch_1;
        var response_1 = 0;
        values.forEach(function (i) {
            var y = Math.abs(i - newSearch_1);
            if (y > atual_1) {
                atual_1 = y;
                response_1 = values.indexOf(i);
            }
        });
        return values[response_1];
    }
    if (indexIsZero) {
        var regex = /\D[0]\D/;
        var valuesString = values.toString();
        var hasZero = valuesString.match(regex);
        if (hasZero) {
            return 0;
        }
        if (!hasZero) {
            var newValues_1 = [];
            values.forEach(function (i) {
                newValues_1.push(Math.abs(i));
            });
            var atual_2 = search - newValues_1[0];
            var response_2 = 0;
            newValues_1.forEach(function (i) {
                var y = Math.abs(search - i);
                if (y < atual_2) {
                    atual_2 = y;
                    response_2 = newValues_1.indexOf(i);
                }
            });
            return values[response_2];
        }
    }
    if (!indexIsZero) {
        var atual_3 = search - values[0];
        var response_3 = 0;
        values.forEach(function (i) {
            var y = Math.abs(search - i);
            if (y < atual_3) {
                atual_3 = y;
                response_3 = values.indexOf(i);
            }
        });
        return values[response_3];
    }
}
console.log('Example:');
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
console.log(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
console.log(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
console.log(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
console.log(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
console.log(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
console.log(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
console.log(nearestValue([-1, 2, 3], 0), -1);
console.log(nearestValue([0, -2], -1), -2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
