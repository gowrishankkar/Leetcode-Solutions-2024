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
 * @return {number[]}
 */
    
var rightSideView = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return [];

    let res = [];
    let map = {}
    bfs(root, 0, res , map);
    return res;
 
 };


const bfs = (root, level, res, map) => {
    if (!root) return;
    if (!map[level]) {
        res.push(root.val);
        map[level] = true;
    }
    bfs(root.right, level + 1, res, map);
    bfs(root.left, level + 1, res, map);
}