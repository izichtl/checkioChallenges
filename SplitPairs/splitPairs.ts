

function splitPairs(text: string): string[] {
    let stringArray: string[] = text.split('')
    let len: number = stringArray.length - 1
    let isEven: number = len % 2 
    let responseArray: string[] = []
    if (!isEven) {
        stringArray.push('_')           
        
    }
    for (let i = 0; i <= len; i += 2){
        let concat = stringArray[i] + stringArray[i + 1]
        responseArray.push(concat)
    }
    return responseArray
    
}

console.log('Example:');
console.log(splitPairs('abc'), ['ab', 'c_']);
console.log(splitPairs('a'), ['a_']);
console.log(splitPairs(''), []);
console.log(splitPairs('abcd'), ['ab', 'cd']);
console.log("Coding complete? Click 'Check' to earn cool rewards!");