

function allTheSame(elements: any[]): boolean {
    // your code here
    
    let response: boolean = true
    for(let i = 0; i < (elements.length); i++) {
      let firstIndex = elements[0]
      let checkIndex = firstIndex === elements[i]
      if (!checkIndex) {
        response = false
      }
      
    }
    return response 
}


console.log('Example:')
console.log(allTheSame([1, 1, 1]), true)
console.log(allTheSame([1, 2, 1]), false)
console.log(allTheSame(['a', 'a', 'a']), true)
console.log(allTheSame([]), true)
console.log(allTheSame([1]), true)

// These "asserts" are used for self-checking and not for an auto-testing
/*
console.log("Coding complete? Click 'Check' to earn cool rewards!");
*/