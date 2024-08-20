function padStr(str, length, char, isRightPad) {
    if (str.length >= length) return str;
    const padding = char.repeat(length - str.length);
    return isRightPad ? str + padding : padding + str;
}

module.exports = {
    strPadLeft: function(str, length, char = ' ') {
        return padStr(str, length, char, false);
    },
    strPadRight: function(str, length, char = ' ') {
        return padStr(str, length, char, true);
    }
};
