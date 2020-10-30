function betweenMarkers(line, left, right) {
    var indexLeft = line.indexOf(left);
    var indexRight = line.indexOf(right);
    var subString = line.substring(indexLeft + 1, indexRight);
    return subString;
}
console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));
console.log();
