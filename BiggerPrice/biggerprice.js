;
function biggerPrice(limit, data) {
    var priceArray = [];
    var indexArray = [];
    var responseArray = [];
    for (var i = 0; i <= (data.length - 1); i++) {
        var item = data[i].price;
        priceArray.push(item);
    }
    console.log(typeof (priceArray), typeof (priceArray[0]));
    var sortedArray = priceArray.sort(function (n1, n2) { return n2 - n1; });
    var sortedIndex = 0;
    var countIndex = 0;
    for (var i = 1; i <= (limit); i++) {
        for (var i_1 = 0; i_1 <= (data.length - 1); i_1++) {
            var info = data[i_1].price == sortedArray[sortedIndex];
            if (info) {
                indexArray.push(data[i_1]);
            }
        }
        sortedIndex++;
        responseArray.push(indexArray[countIndex]);
        countIndex++;
    }
    return responseArray;
}
console.log('Example:');
console.log(biggerPrice(2, [
    { "name": "bread", "price": 100 },
    { "name": "wine", "price": 138 },
    { "name": "meat", "price": 15 },
    { "name": "water", "price": 1 }
]), [
    { "name": "wine", "price": 138 },
    { "name": "bread", "price": 100 }
]);
console.log(biggerPrice(1, [
    { "name": "pen", "price": 5 },
    { "name": "whiteboard", "price": 170 }
]), [{ "name": "whiteboard", "price": 170 }]);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
/*
*/ 
