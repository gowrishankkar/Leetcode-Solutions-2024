/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) {
        return []
    }
    let arr = [root]
    let res = []
    let flag = true
    while(arr.length) {
        if(flag) {
            let i = 0
            let size = arr.length
            let temp = []

            while(i < size) {
                let curr = arr.shift()
                temp.push(curr.val)

                if(curr.left) {
                    arr.push(curr.left)
                }
                 if(curr.right) {
                    arr.push(curr.right)
                }
                i++
            }
            res.push(temp)
        }
        else {
            let i = 0
            let size = arr.length
            let temp = []

            while(i < size) {
                let curr = arr.pop()
                temp.push(curr.val)

                if(curr.right) {
                    arr.unshift(curr.right)
                }
                 if(curr.left) {
                    arr.unshift(curr.left)
                }
                i++
            }
            res.push(temp)
        }
        flag = !flag
    }
    return res
};