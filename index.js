function padStr(str, length, char, isRightPad) {
    if (str.length >= length) return str;
    const padding = char.repeat(length - str.length);
    return isRightPad ? str + padding : padding + str;
}

function padParagraph(str, numLines = 2) {
    const newLines = '\n'.repeat(numLines);
    return newLines + str + newLines;
}

module.exports = {
    strPadLeft: function(str, length, char = ' ') {
        return padStr(str, length, char, false);
    },
    strPadRight: function(str, length, char = ' ') {
        return padStr(str, length, char, true);
    },
    padParagraph: padParagraph
};
