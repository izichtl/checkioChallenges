// import assert from "assert";
function betweenMarkers(text, begin, end) {
    var hasEspecial = '\\';
    var join = begin + end;
    var checkChars = /[^A-Za-z\s',.]/ig;
    var checkMatch = join.match(checkChars);
    if (!checkMatch)
        hasEspecial = '';
    var startStringIndex = (hasEspecial + ("" + begin));
    var startIndexRegex = new RegExp(startStringIndex, 'i');
    var startIndex = text.match(startIndexRegex);
    var endStringIndex = ("\\" + ("" + end));
    var endIndexRegex = new RegExp(endStringIndex, 'i');
    var endIndex = text.match(endIndexRegex);
    if (startIndex && endIndex) {
        if (startIndex.index > endIndex.index)
            return '';
    }
    var beginString = (hasEspecial + (begin + ".+"));
    var startRegex = new RegExp(beginString, 'ig');
    var startMatch = text.match(startRegex);
    var hasEndString = ("" + hasEspecial + end);
    var hasEndRegex = new RegExp(hasEndString, 'ig');
    var hasEnd = text.match(hasEndRegex);
    if (!startMatch && !hasEnd)
        return text;
    if (startMatch && !hasEnd) {
        var arrayText = startMatch.toString();
        var response = arrayText.replace(begin, '');
        return response;
    }
    if (startMatch && hasEnd) {
        var arrayText = startMatch.toString();
        var endString = (".+" + hasEspecial + end);
        var endRegex = new RegExp(endString, 'ig');
        var endMatch = arrayText.match(endRegex);
        var fullArrayText = endMatch.toString();
        var startClean = fullArrayText.replace(begin, '');
        var response = startClean.replace(end, '');
        return response;
    }
    if (!startMatch) {
        var endString = (".+" + hasEspecial + end);
        var endRegex = new RegExp(endString, 'ig');
        var endMatch = text.match(endRegex);
        if (endMatch) {
            var arrayText = endMatch.toString();
            var response = arrayText.replace(end, '');
            return response;
        }
    }
}
console.log('EXEC 01', betweenMarkers('What is >apple<', '>', '<'), 'R: apple');
console.log('EXEC 02', betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"), 'R: My new site');
console.log('EXEC 03', betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'R: No');
console.log('EXEC 04', betweenMarkers('No [b]hi', '[b]', '[/b]'), '  R: hi');
console.log('EXEC 05', betweenMarkers('No hi', '[b]', '[/b]'), 'R: No hi');
console.log('EXEC 06', betweenMarkers('No <hi>', '>', '<'), 'R: ');
console.log('EXEC 07', betweenMarkers("Never send a human to do a machine's job.", "Never", "do"), 'R: ');
