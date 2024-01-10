/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let prevRow = new Array(t.length + 1).fill(0);
    prevRow[0] = 1;
    for (let i = 1; i <= s.length; i++) {
        let currRow = new Array(t.length + 1).fill(0);
        currRow[0] = 1;
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                currRow[j] = prevRow[j - 1] + prevRow[j];
            } else {
                currRow[j] = prevRow[j];
            }
        }
        prevRow = currRow;
    }
    return prevRow[t.length];
};