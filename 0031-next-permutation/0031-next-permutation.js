/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
        const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= nums[i + 1]) continue;
        let j = nums.length - 1;
        while (nums[i] >= nums[j]) j--;
        swap(i, j);
        j = nums.length - 1;
        while (i < j) swap(++i, j--);
        return;
    }
    nums.reverse();

};