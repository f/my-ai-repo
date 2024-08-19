module.exports = function padString(str, length, char = ' ') {
    if (str.length >= length) return str;
    const padding = char.repeat(length - str.length);
    return padding + str;
};
