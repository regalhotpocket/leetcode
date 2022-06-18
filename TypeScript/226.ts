// https://leetcode.com/problems/invert-binary-tree/
// Runtime: 63 ms, faster than 97.19% of TypeScript online submissions for Invert Binary Tree.
// Memory Usage: 45.2 MB, less than 9.20% of TypeScript online submissions for Invert Binary Tree.
// 06/18/2022 16:55
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root == null)
        return null;
    [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
    return root;
};
