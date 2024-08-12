class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        indices = []
        for index in range(len(words)) :
            if x in words[index] :
                indices.append(index)
        return indices