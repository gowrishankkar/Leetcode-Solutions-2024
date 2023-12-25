/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // const last = strs.length - 1;
    // let i = 0;

    // strs.sort();
    // while (strs[0][i] && strs[0][i] === strs[last][i]) {
    //     i++;
    // }

    // return strs[0].slice(0, i);

    return strs.reduce((pre, cur) => {
        let i = 0;
        while (pre[i] && pre[i] === cur[i]) i++;
        return pre.slice(0, i);
    });
};