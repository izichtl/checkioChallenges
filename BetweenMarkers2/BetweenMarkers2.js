function betweenMarkers(text, begin, end) {
    var construtor = begin + ".+" + end;
    var regexA = new RegExp(construtor, 'gi');
    console.log(regexA);
    var testeRegexA = text.match(regexA);
    console.log(testeRegexA);
    return "Final da Função";
}
console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'), ' >> apple');
console.log(betweenMarkers('What is >apple<', '>', '<'), ' >> apple');
console.log(betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"), ' >> My new site');
console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'), ' >> No');
console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'), ' >> hi');
console.log(betweenMarkers('No hi', '[b]', '[/b]'), ' >> No hi');
console.log(betweenMarkers('No <hi>', '>', '<'), ' >> ');
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
