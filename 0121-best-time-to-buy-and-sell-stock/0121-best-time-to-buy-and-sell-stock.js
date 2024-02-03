/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let l = 0; // buy
    let r = 1; // sell

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            const profit = prices[r] - prices[l];
            res = Math.max(res, profit);
        } else {
            l = r;
        }

        r += 1;
    }

    return res;
};