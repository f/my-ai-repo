module.exports = {
    strPadLeft: function (str, length, char = ' ') {
        if (str.length >= length) return str;
        const padding = char.repeat(length - str.length);
        return str + padding;
    },
    strPadRight: function (str, length, char = ' ') {
        if (str.length >= length) return str;
        const padding = char.repeat(length - str.length);
        return padding + str;
    }
};
