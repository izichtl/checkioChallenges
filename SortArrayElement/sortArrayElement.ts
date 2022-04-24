import { strict as assert } from 'assert'

function frequencySort(data: any[]): any[] {
    if(data == undefined) return [];
    let array = new Array();
    let response = new Array();
    let uniqueChars: Set<string>  = new Set(data);
    const uniqueArray = Array.from(uniqueChars);
    uniqueArray.forEach( (e, index) => 
    {
        let frequency:number = 0
        data.forEach((elemento) => {
            if (elemento === uniqueArray[index]) frequency++
        })
        array.push([uniqueArray[index], frequency])
    })
    array.sort((a:number, b:number) => {
        return b[1] - a[1];
    })
    array.forEach(e => 
        {
            for (
                let i:number = 0; 
                i < e[1]; 
                i++
            ){
                response.push(e[0])
            }
            
        })
    return response;
}

console.log('Example:')
frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]
// assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
frequencySort(['bob', 'bob', 'carl', 'alex', 'alex', 'alex', 'alex',  'bob'])
// assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
// frequencySort([]), [];
// assert.deepEqual(frequencySort([]), []);
// assert.deepEqual(frequencySort([1]), [1]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");