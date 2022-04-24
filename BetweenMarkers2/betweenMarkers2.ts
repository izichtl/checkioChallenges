// import assert from "assert";

function betweenMarkers(text: string, begin: string, end: string): string {
    let hasEspecial: string = '\\'
    const join: string  = begin+end
    const checkChars = /[^A-Za-z\s',.]/ig
    const checkMatch = join.match(checkChars)
    if (!checkMatch) hasEspecial = ''
    
    const startStringIndex: string = (hasEspecial + `${begin}`)
    const startIndexRegex = new RegExp(startStringIndex, 'i');
    const startIndex = text.match(startIndexRegex)
    const endStringIndex: string = (`\\` + `${end}`)
    const endIndexRegex = new RegExp(endStringIndex, 'i');
    const endIndex = text.match(endIndexRegex)
    if (startIndex && endIndex) {
        if (startIndex.index > endIndex.index) return ''
    }

    const beginString: string = (hasEspecial + `${begin}.+`)
    const startRegex = new RegExp(beginString, 'ig');
    const startMatch = text.match(startRegex)
    
    const hasEndString: string = (`${hasEspecial}${end}`)
    const hasEndRegex = new RegExp(hasEndString, 'ig');
    const hasEnd = text.match(hasEndRegex)
    
    if (!startMatch && !hasEnd) return text

    if (startMatch && !hasEnd) {
        const arrayText = startMatch.toString()
        const response = arrayText.replace(begin, '')
        return response
    }
    if (startMatch && hasEnd) {
        const arrayText = startMatch.toString()
        const endString: string = (`.+${hasEspecial}${end}`)
        const endRegex: RegExp = new RegExp(endString, 'ig');
        const endMatch = arrayText.match(endRegex)
        const fullArrayText = endMatch.toString()
        const startClean = fullArrayText.replace(begin, '')
        const response = startClean.replace(end, '')
        return response
    }
    if (!startMatch) {
        const endString: string = (`.+${hasEspecial}${end}`)
        const endRegex: RegExp = new RegExp(endString, 'ig');
        const endMatch = text.match(endRegex)
        if (endMatch) {
            const arrayText = endMatch.toString()
            const response = arrayText.replace(end, '')
            return response
        }
    }

}


console.log('EXEC 01', betweenMarkers('What is >apple<', '>', '<'), 'R: apple')
console.log('EXEC 02', betweenMarkers("<head><title>My new site</title></head>",
               "<title>", "</title>"), 'R: My new site')
console.log('EXEC 03', betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'R: No')
console.log('EXEC 04', betweenMarkers('No [b]hi', '[b]', '[/b]'), '  R: hi')
console.log('EXEC 05', betweenMarkers('No hi', '[b]', '[/b]'), 'R: No hi')
console.log('EXEC 06', betweenMarkers('No <hi>', '>', '<'), 'R: ')
console.log('EXEC 07', betweenMarkers("Never send a human to do a machine's job.","Never","do"), 'R: ')