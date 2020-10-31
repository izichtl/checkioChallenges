

function endZeros(values: number): number {
    let contador: number = 0
    let newArray: number[] = []
    let textNumber: string = values.toString()
    let stringArray: string[] = textNumber.split('')
    stringArray.forEach(i => { 
        newArray.unshift(Number(i))
        
    })
    let len = newArray.length 
    for (let i = 0; i < len; i++) {
        let skip = newArray[i] == 0
        if (!skip) {
            return contador
        }
        if (skip) {
            contador++
        }
    }
    return contador
    
    
}

console.log('Example:');
console.log(endZeros(0), 1);
console.log(endZeros(1), 0);
console.log(endZeros(10), 1);
console.log(endZeros(101), 0);
console.log(endZeros(245), 0);
console.log(endZeros(100100), 2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");