
function sumNumbers(test: string): number {
    let regex = /\d+[a-z]/g
    let response: string[] = test.match(regex)
    let regex2 = /\d+/g
    let response2: string[] = test.match(regex2)
    let sumArray: number[] = []


    function soma(total, num) {
      return total + num;
    }


    if (response) {
        return 0
    }
    
    
    if (!response2) {
        return 0
    }
    
    response2.forEach(i => {
        sumArray.push(Number(i))
    })
    
    return sumArray.reduce(soma);
}

console.log('Example:');
console.log(sumNumbers('who is 1st here'), 0);
console.log(sumNumbers('my numbers is 2'), 2);
console.log(sumNumbers('This picture is an oil on canvas '
+ 'painting by Danish artist Anna '
+ 'Petersen between 1845 and 1910 year'), 3755);

console.log(sumNumbers('5 plus 6 is'), 11);
console.log(sumNumbers('2 hi 4'));
console.log(sumNumbers('hi'), 0);
console.log(sumNumbers(''), 0);
console.log("Coding complete? Click 'Check' to earn cool rewards!");




