function padStr() {
    return function (str, length, char, direction) {
        if (str.length >= length) return str;
        const padding = char.repeat(length - str.length);
        return direction === 'left'? (padding + str) : (str + padding);
    };
}

module.exports = {
    padStr: padStr()
};
