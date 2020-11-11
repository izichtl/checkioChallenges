

function popularWords(text: string, words: string[]) {
 
  words.forEach(i => {
    let regexCheck = new RegExp(i, "gi")
    let checkM = text.match(regexCheck)
    if (checkM) {
      let count = checkM.length
      console.log(checkM, count)
    }
    })
    return {};
}


console.log('Example:')
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']))