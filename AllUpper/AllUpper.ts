

function isAllUpper(text: string): boolean {
    let regex = /\w/g
    let checkString = text.match(regex)
    let response: boolean = true
    if (!checkString) {
        return true
    }
    for (let i = 0; i <= (checkString.length - 1); i++){
        let checkUp = checkString[i] == checkString[i].toUpperCase()
        if (!checkUp) {
            response = false
        }
    }
    return response;
}
console.log('Example:')
console.log(isAllUpper('ALL UPPER'))
console.log(isAllUpper('ALL UPPER'), true)
console.log(isAllUpper('all lower'), false)
console.log(isAllUpper('mixed UPPER and lower'), false)
console.log(isAllUpper(''), true)
console.log("Coding complete? Click 'Check' to earn cool rewards!")

