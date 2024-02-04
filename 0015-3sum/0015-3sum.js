/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
    
//     nums.sort((a, b) => a - b);
//     let ans = [];
//     let n = nums.length;
//     for(let i = 0; i< n; i++){
//         if(i !== 0  && nums[i] === nums[i - 1]) continue;
//         let j = i + 1;
//         let k = n - 1;
        
//         while(j < k){
//             let sum = nums[i] + nums[k] + nums[j];
//             if(sum < 0){
//                 j++;
//             }else if(sum > 0){
//                 k--;
//             }else {
//                 ans.push(nums[i], nums[j], nums[k]);
//                 j++;
//                 k--;
//                 while(j < k && nums[j] === nums[j-1]) j++;
//                 while(j < k && nums[k] === nums[k+1]) k++;

//             }
//         }
//     }
//     return ans;
// };

var threeSum = function(nums) {
    const result = []
    nums.sort((a,b) => a - b)

    for (let i=0; i < nums.length; i++) {
        const target = nums[i]

        if (i > 0 && target === nums[i -1]) continue

        let [left, right] = [i + 1, nums.length - 1]

        while (left < right) {
            const sum = target + nums[left] + nums[right]

            if (sum > 0) {
                right -= 1
            } else if (sum < 0) {
                left += 1
            } else {
                result.push([target, nums[left], nums[right]])
                left += 1

                while (nums[left] === nums[left - 1] && left < right) {
                    left += 1
                }
            }
        }
    }

    return result
};