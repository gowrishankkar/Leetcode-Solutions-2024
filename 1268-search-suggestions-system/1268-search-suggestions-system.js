/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort((a, b) => a.localeCompare(b))
  let left = 0
  let right = products.length - 1
  let answer = []
  for (let i = 0; i < searchWord.length; i++) {
    const target = searchWord[i]
    let local = []
    while (left <= right && (products[left].length <= i || products[left].charAt(i) !== target)) {
      left++
    }
    while (left <= right && (products[right].length <= i || products[right].charAt(i) !== target)) {
      right--
    }
    if (left <= right) {
      for (let k = 0; k < 3; k++) {
        if (left + k <= right) {
          local.push(products[left + k])
        } else {
          break
        }
      }
    }
    answer.push(local)
  }
  return answer
};