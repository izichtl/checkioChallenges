function nonUniqueElements(data) {
    var arr = [];
    var arr1 = data.map(function (n, nn) {
        console.log(n, data[nn + 1]);
        return n == data[nn + 1];
    });
    console.log(arr1);
    return arr;
}
console.log('Example:');
console.log(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
