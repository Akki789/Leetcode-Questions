/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count = new Array(26).fill(0);

    for (let ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s[i].charCodeAt(0) - 97] === 1) return i;
    }

    return -1;
};
