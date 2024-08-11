import math
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        minOps = 0
        for i in range(len(nums)) :
            mod = nums[i] % 3
            if mod != 0 :
                minOps += min(mod, 3 - mod)
            i += 1
        return minOps