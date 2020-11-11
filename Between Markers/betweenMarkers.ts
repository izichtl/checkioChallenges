


function betweenMarkers(line: string, left: string, right: string): string {
  let indexLeft = line.indexOf(left)
  let indexRight = line.indexOf(right)
  let nS = line.search("[b]")
  console.log(nS)
 


  return '000000000000000000';
}

console.log('Example:')


console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')
console.log(betweenMarkers("<head><title>My new site</title></head>",
                            "<title>", "</title>"), 'My new site')
console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
console.log(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
console.log(betweenMarkers('No <hi>', '>', '<'), '')