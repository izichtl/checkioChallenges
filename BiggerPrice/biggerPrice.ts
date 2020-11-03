
interface Stock {
    name: string,
    price: number,
};



function biggerPrice(limit: number, data: Stock[]): Stock[] {
  let priceArray: number[] = []
  let indexArray: Stock[] = []
  let responseArray: Stock[] = []
  for (let i = 0; i <= (data.length-1); i++) {
    let item = data[i].price
    priceArray.push(item)
  }

  console.log(typeof(priceArray), typeof(priceArray[0]))
  let sortedArray: number[] = priceArray.sort((n1, n2) => n2 - n1)
  let sortedIndex = 0
  let countIndex = 0
  
  for (let i = 1; i <= (limit); i++) {
    for (let i = 0; i <= (data.length - 1); i++) {
      let info = data[i].price == sortedArray[sortedIndex]
      if (info) {
        indexArray.push(data[i])
      }
    }
    sortedIndex++ 
    responseArray.push(indexArray[countIndex])
    countIndex++
  }
  return responseArray
}





console.log('Example:')


console.log(biggerPrice(2, [
  {"name": "bread", "price": 100},
  {"name": "wine", "price": 138},
  {"name": "meat", "price": 15},
  {"name": "water", "price": 1}
]), [
  {"name": "wine", "price": 138},
  {"name": "bread", "price": 100}
])
console.log(biggerPrice(1, [
  {"name": "pen", "price": 5},
  {"name": "whiteboard", "price": 170}
]), [{"name": "whiteboard", "price": 170}])
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
/*
*/