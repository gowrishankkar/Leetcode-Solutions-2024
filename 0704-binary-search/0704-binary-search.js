/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l = 0;
    var r = nums.length - 1;

    while (l <= r) {
        var m = Math.floor(l + ((r - l) / 2))

        if (nums[m] === target) {
            return m;
        }

        if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return -1;
};