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
var verticalTraversal = function(root) 
{
     let map = {}
      if(root == null) return;
     let s = [[root, 0, 0]];
    
      while(s.length){
          let [node , v, lev] = s.pop();
           if(!map[v]) map[v] = []
           map[v] = [...map[v], {lev, val : node.val}];
          node.left && s.push([node.left, v - 1, lev + 1])
          node.right && s.push([node.right, v + 1, lev + 1])
      }
        let result = [];
        Object.keys(map).sort((a,b)=> a-b).forEach((key) =>{
            map[key].sort((a,b)=>(a.lev===b.lev)?a.val-b.val:a.lev-b.lev);
            result.push(map[key].map(el=>el.val));

        })
    return result;
};
