

function backwardStringByWord(text: string): string {
  let regex = /[a-zA-Z]+/gi
  let mRegex = text.match(regex)
  if (!mRegex) {
    return ''
  }
  
  let regexSpace = /\s+/gi
  let haveSpace = text.match(regexSpace)
  
  let nArray = []
  mRegex.forEach((i) => {
    
    let splited = i.split('')
    let reversed = (splited.reverse()).join()
    let replaced = reversed.replace(/\,/gi, '')
    nArray.push(replaced)
    
  })
  let newString = nArray[0]
  
  for (let i = 1; i < (nArray.length); i++) {
    newString = newString + haveSpace[i-1] + nArray[i] 
    
  
    
    
  }
  return newString
}
console.log('Example:');
console.log(backwardStringByWord(''), '');
console.log(backwardStringByWord('world'), 'dlrow');
console.log(backwardStringByWord('hello world'), 'olleh dlrow');
console.log(backwardStringByWord('hello   world'), 'olleh   dlrow');
console.log(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');
console.log("Coding complete? Click 'Check' to earn cool rewards!");


















/*let text1 = 'hello world'
let text2 = 'welcome to a game'

let regex = /[a-zA-Z]+/gi
let mRegex = text2.match(regex)
let nArray = []
mRegex.forEach((i) => {
  let cc = i
  let c2 = cc.split('')
  let c3 = (c2.reverse()).join()
  let c4 = c3.replace(/\,/gi, '')
  nArray.push(c4)
  
})
let newString = nArray[0]
for (let i = 1; i < (mRegex.length); i++) {
  newString = newString + ' ' + nArray[i]
  

}
return newString

console.log(newString)



function inverT() {
  return `9
          9
          9`
}

console.log(inverT('hello   world'))


*/








/*

function backwardStringByWord(text: string): string {
  let regex = /[a-zA-Z]+/gi
  let mRegex = text.match(regex)
  if (!mRegex) {
    return ''
  }
  
  let regexSpace = /\s/gi
  let haveSpace = text.match(regexSpace)
  let spaceCount: number = 0
  let stringSpace : string 
  if (haveSpace) {
    haveSpace.forEach((i) => {
      console.log(i.length, 'a')
    })
    spaceCount = Object.keys(haveSpace).length
    stringSpace = haveSpace.join().replace(/\,/gi, '')
  }
  
  let nArray = []
  mRegex.forEach((i) => {
    
    let splited = i.split('')
    let reversed = (splited.reverse()).join()
    let replaced = reversed.replace(/\,/gi, '')
    nArray.push(replaced)
    
  })
  let newString = nArray[0]
  for (let i = 1; i < (mRegex.length); i++) {
    newString = (newString + stringSpace + nArray[i])
    
  
  }
  return newString
}
console.log('Example:');
console.log(backwardStringByWord(''), '');
console.log(backwardStringByWord('world'), 'dlrow');
console.log(backwardStringByWord('hello world'), 'olleh dlrow');
console.log(backwardStringByWord('hello   world'), 'olleh   dlrow');
console.log(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');
console.log("Coding complete? Click 'Check' to earn cool rewards!");


















/*let text1 = 'hello world'
let text2 = 'welcome to a game'

let regex = /[a-zA-Z]+/gi
let mRegex = text2.match(regex)
let nArray = []
mRegex.forEach((i) => {
  let cc = i
  let c2 = cc.split('')
  let c3 = (c2.reverse()).join()
  let c4 = c3.replace(/\,/gi, '')
  nArray.push(c4)
  
})
let newString = nArray[0]
for (let i = 1; i < (mRegex.length); i++) {
  newString = newString + ' ' + nArray[i]
  

}
return newString

console.log(newString)



function inverT() {
  return `9
          9
          9`
}

console.log(inverT('hello   world'))


*/