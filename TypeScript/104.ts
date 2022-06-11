// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Runtime: 123 ms, faster than 25.51% of TypeScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 46.6 MB, less than 39.89% of TypeScript online submissions for Maximum Depth of Binary Tree.
// 04/07/2022 21:48
function maxDepth(root: TreeNode | null): number {
    return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0; 
};
