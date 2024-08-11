class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        count = 0
        stoneList = [x for x in stones]
        print(stoneList)
        for i in range(len(jewels)) : 
            if jewels[i] in stoneList :
                count += stoneList.count(jewels[i])
        return count 