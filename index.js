module.exports = function padString(str, length, char = ' ', direction = 'left') {
    if (str.length >= length) return str;
    const padding = char.repeat(length - str.length);
    return direction === 'left' ? padding + str : str + padding;
};
