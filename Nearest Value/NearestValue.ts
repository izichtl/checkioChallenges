


function nearestValue(values: number[], search: number) { 
    let indexIsZero = search == 0 
    let isNegative = search < 0
    if (isNegative) {
      let newSearch = Math.abs(search)
      let atual: number = values[0] - newSearch  
      let response = 0
      values.forEach(i => {
          let y: number = Math.abs(i - newSearch)
          if (y > atual) {
              atual = y
              response = values.indexOf(i)
          }
      })
      return values[response] 
    }
    if (indexIsZero) {
      let regex = /\D[0]\D/
      let valuesString = values.toString()
      let hasZero = valuesString.match(regex)
      if (hasZero) {
        return 0;
      }
      if (!hasZero) {
        let newValues: number[] = []
        values.forEach(i => {
            newValues.push(Math.abs(i))
        })
        let atual: number = search - newValues[0]
        let response = 0
        newValues.forEach(i => {
            let y: number = Math.abs(search - i)
            if (y < atual) {
                atual = y
                response = newValues.indexOf(i)
            }
        })
        return values[response]
      }
    }
    if (!indexIsZero) {
      let atual: number = search - values[0]
      let response = 0
      values.forEach(i => {
          let y: number = Math.abs(search - i)
          if (y < atual) {
              atual = y
              response = values.indexOf(i)
          }
      })
      return values[response] 
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