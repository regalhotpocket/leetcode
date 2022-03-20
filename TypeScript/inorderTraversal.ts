// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/
// 03/20/2022 14:56
// Runtime: 77 ms, faster than 74.92% of TypeScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 44.4 MB, less than 51.92% of TypeScript online submissions for Binary Tree Inorder Traversal.
function inorderTraversal(root: TreeNode | null): number[] {
    var result = [];
    function inorder(node: TreeNode | null): void {
        if (node != null) {
            inorder(node.left);
            result.push(node.val);
            inorder(node.right);
        }
    };
    inorder(root);
    return result;
};
