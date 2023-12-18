/**
 * 129. 求根节点到叶节点数字之和
 * 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：
例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。 叶节点 是指没有子节点的节点。
 */
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
 * @return {number}
 */
var sumNumbers = function(root) {
    let paths = []
    let dfs = (node, path) => {
        if(!node) return 
        let newPath = `${path}${node.val}`
        if(!node.left && !node.right) {
            paths.push(newPath)
        }
       dfs(node.left, newPath)
       dfs(node.right, newPath)
    }
    dfs(root, '')
    // 计算总和
    return paths.reduce((total,val)=> {
        return total + Number(val)
    },0)
};