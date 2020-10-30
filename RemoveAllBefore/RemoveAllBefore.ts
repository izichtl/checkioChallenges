

function removeAllBefore(values: number[], b: number): number[] {

  function findB(array, index) {
    array.forEach(ele => {
      ele == b      
    });
  }


  console.log(values.find(findB))
  let cut = values.indexOf(b)
  let response = values.slice(cut, values.length)
  
  return response;
}

console.log('Example:');
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));



console.log("Coding complete? Click 'Check' to earn cool rewards!");