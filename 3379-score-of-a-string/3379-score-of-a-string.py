
class Solution:
    def scoreOfString(self, s: str) -> int:
        newL = []
        for char in range(1, len(s)) : 
            newL.append(abs(ord(s[char]) - ord(s[char-1])))
        return sum(newL)