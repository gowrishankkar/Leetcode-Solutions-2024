/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    let wordSet = new Set(wordList);
    wordSet.delete(beginWord);
    let queue = [];
    queue.push(beginWord);

    let level = 1;;
    while (queue.length) {
        level++;
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            let currWord = queue.shift();

            let neighbors = getNeighbors(currWord);
            for (let neighbor of neighbors) {
                if (neighbor === endWord) return level;
                if (wordSet.has(neighbor)) {
                    wordSet.delete(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }


    return 0;
};

var getNeighbors = function (word) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let neighbors = [];

    for (let i = 0; i < word.length; i++) {
        for (let char of alphabets) {
            let neighbor = word.slice(0, i) + char + word.slice(i + 1);
            neighbors.push(neighbor);
        }
    }
    return neighbors;
};