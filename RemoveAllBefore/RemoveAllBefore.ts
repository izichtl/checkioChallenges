

function removeAllBefore(values: number[], b: number): number[] {
  let isObject: boolean = typeof(b) === 'object'
  let isNumber: boolean = typeof (b) === 'number'
  let responseArray: number[] = []
  let responseEmpty: number[] = []
  if (isObject){
    return responseEmpty
  }
  if (isNumber) {
    if (values.indexOf(b) == -1) {
      return values
    } else {
      let cut:number = values.indexOf(b)
      responseArray = values.slice(cut, values.length)
      return responseArray
    }
  }
}

console.log('Example:')
console.log(removeAllBefore([1, 2, 3, 4, 5], 99))
console.log('--------------------------------')
console.log(removeAllBefore([1, 2, 3, 4, 5], 3))
console.log('-----------------------------------')
