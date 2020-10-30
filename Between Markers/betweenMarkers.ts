


function betweenMarkers(line: string, left: string, right: string): string {
  let indexLeft = line.indexOf(left)
  let indexRight = line.indexOf(right)
  let subString = line.substring(indexLeft+1, indexRight)
  return subString;
}

console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));
console.log();
