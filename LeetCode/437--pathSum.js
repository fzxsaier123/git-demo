/**
 * 437. 路径总和 III
给定一个二叉树的根节点 root ，和一个整数 targetSum ，
求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0
    return (
        countSum(root,targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
    )
}

const countSum = (node, target) => {
    let count = 0
    let dfs = (node, sum) => {
        if(!node) return 
        if(node.val === sum) {
            count += 1
        }
        dfs(node.left, sum - node.val)
        dfs(node.right, sum - node.val)
    }
    dfs(node, target)
    return count
}