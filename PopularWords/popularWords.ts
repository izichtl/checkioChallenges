

function popularWords(text: string, words: string[]) {
  let response: object = {
  }
  words.forEach((e) => {
    let count: number = 0
    const string: string = `[^a-z]${e}[^a-z]|${e}$|^${e}\\s`
    const regex = new RegExp(string, 'ig');
    const match = text.match(regex)
    if (match) count = match.length
    response[e] = count
  })
  return response
}


console.log('Example:')
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']))
console.log(popularWords("It's flying from somewhere\nAs fast as it can\nI couldn't keep up with it\nNot if I ran", ["it's","ran","i"]))
console.log(popularWords("And the Raven never flitting still is sitting still is sitting\nOn the pallid bust of Pallas just above my chamber door\nAnd his eyes have all the seeming of a demon’s that is dreaming\nAnd the lamp-light o’er him streaming throws his shadow on the floor\nAnd my soul from out that shadow that lies floating on the floor\nShall be lifted nevermore",["raven","still","is","floor","nevermore"]))
console.log(popularWords(`
And the Raven never flitting still is sitting still is sitting
On the pallid bust of Pallas just above my chamber door
And his eyes have all the seeming of a demon’s that is dreaming
And the lamp-light o’er him streaming throws his shadow on the floor
And my soul from out that shadow that lies floating on the floor
Shall be lifted nevermore`, ["raven","still","is","floor","nevermore"]))
console.log('Expected: {"raven":1,"still":2,"is":3,"floor":2,"nevermore":1}')