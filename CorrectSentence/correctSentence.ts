

function correctSentence(text: string): string {
    let newString: string = text 
    let firstIsCapital = text.substring(0, 1)
    let checkUp = firstIsCapital == firstIsCapital.toUpperCase()
    
    if (!checkUp) {
        newString = text.charAt(0).toUpperCase() + text.slice(1)
    }
    
    let textLength = newString.length
    let lastIsDot = text.substring(textLength - 1, textLength)
    let checkDot = lastIsDot == `.`
    
    if (!checkDot) {
        newString = newString + '.'
        
    }
    
    return newString
}





console.log('Example:');
console.log(correctSentence('greetings, friends'));
console.log(correctSentence('Greetings, friends.'), 'Greetings, friends.')/*
console.log(correctSentence('greetings, friends'), 'Greetings, friends.')
console.log(correctSentence('Greetings, friends'), 'Greetings, friends.')
console.log("Coding complete? Click 'Check' to earn cool rewards!")*/