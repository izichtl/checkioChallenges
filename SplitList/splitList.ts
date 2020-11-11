
function splitList(values: number[]): number[][] {
  let arrA:number[] = []
  let arrB: number[] = []
  let arrAlength: number = 0
  let arrBlength: number = 0
  const isEmpty = values.length == 0
  if (isEmpty) {
    
    return [arrA, arrB] 
  } else {
    let isEven = values.map((item) => {
      let isEven = item % 2
      return isEven
    })
    let odds = isEven.reduce((anterior, novo) => { 
      return anterior + novo
    })
    
    let evens = values.length - odds
    let moreOdd = odds > evens
    if (moreOdd) {
      let arrIsOdd = values.length % 2
      let stopPush = 0
      arrAlength = ((values.length - 1) / 2) + 1
      arrBlength = values.length - arrAlength 
      for (let i = 0; i < (arrAlength); i++){
        arrA.push(values[i])
        stopPush++
      }
      for (let i = 0; i < (arrBlength); i++){
        arrB.push(values[stopPush])
        stopPush++
      }
      
    } else {
      let stopPush = 0
      arrAlength = values.length / 2
      arrBlength = arrAlength
      for (let i = 0; i < (arrAlength); i++){
        arrA.push(values[i])
        stopPush++
      }
      for (let i = 0; i < (arrBlength); i++){
        arrB.push(values[stopPush])
        stopPush++
      }
    } 
  }
  return [arrA , arrB]
}
  



console.log(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
console.log(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]]);
console.log(splitList([1, 2, 3]), [[1, 2], [3]]);
console.log(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
console.log(splitList([1]), [[1], []]);
console.log(splitList([]), [[], []]);