// import assert from "assert";

function capsLock(text: string): string {
    // your code here
    return text;
}

// console.log(capsLock("Why are you asking me that?"))

// // These "asserts" are used for self-checking
// console.log((
//     capsLock("Why are you asking me that?"),
//     "Why RE YOU sking me thT?"
// ))
// console.log(
//     capsLock("Always wanted to visit Zambia."),
//     "AlwYS Wnted to visit ZMBI."
// )
// console.log(capsLock("Aloha from Hawaii"), "Aloh FROM HwII")

// console.log("Coding complete? Click 'Check' to earn cool rewards!")



// import assert from "assert";

// function betweenMarkers(text: string, begin: string, end: string): string {
//     let hasEspecial: string = '\\'
//     const join: string  = begin+end
//     const checkChars = /[^A-Za-z\s',.]/ig
//     const checkMatch = join.match(checkChars)
//     if (!checkMatch) hasEspecial = ''
    
//     const startStringIndex: string = (hasEspecial + `${begin}`)
//     const startIndexRegex = new RegExp(startStringIndex, 'i');
//     const startIndex = text.match(startIndexRegex)
//     const endStringIndex: string = (`\\` + `${end}`)
//     const endIndexRegex = new RegExp(endStringIndex, 'i');
//     const endIndex = text.match(endIndexRegex)
//     if (startIndex && endIndex) {
//         if (startIndex.index > endIndex.index) return ''
//     }

//     const beginString: string = (hasEspecial + `${begin}.+`)
//     const startRegex = new RegExp(beginString, 'ig');
//     const startMatch = text.match(startRegex)
    
//     const hasEndString: string = (`${hasEspecial}${end}`)
//     const hasEndRegex = new RegExp(hasEndString, 'ig');
//     const hasEnd = text.match(hasEndRegex)
    
//     if (!startMatch && !hasEnd) return text

//     if (startMatch && !hasEnd) {
//         const arrayText = startMatch.toString()
//         const response = arrayText.replace(begin, '')
//         return response
//     }
//     if (startMatch && hasEnd) {
//         const arrayText = startMatch.toString()
//         const endString: string = (`.+${hasEspecial}${end}`)
//         const endRegex: RegExp = new RegExp(endString, 'ig');
//         const endMatch = arrayText.match(endRegex)
//         const fullArrayText = endMatch.toString()
//         const startClean = fullArrayText.replace(begin, '')
//         const response = startClean.replace(end, '')
//         return response
//     }
//     if (!startMatch) {
//         const endString: string = (`.+${hasEspecial}${end}`)
//         const endRegex: RegExp = new RegExp(endString, 'ig');
//         const endMatch = text.match(endRegex)
//         if (endMatch) {
//             const arrayText = endMatch.toString()
//             const response = arrayText.replace(end, '')
//             return response
//         }
//     }

// }

