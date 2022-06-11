// https://leetcode.com/problems/diameter-of-binary-tree/
// Runtime: 117 ms, faster than 50.58% of TypeScript online submissions for Diameter of Binary Tree.
// Memory Usage: 48 MB, less than 5.23% of TypeScript online submissions for Diameter of Binary Tree.
// 03/12/2022 19:20
function diameterOfBinaryTree(root: TreeNode | null): number {
    function helper(node: TreeNode | null): [number, number] {
        if (node == null)
            return [0, 0];
        const [left_best, left_path] = helper(node.left);
        const [right_best, right_path] = helper(node.right);
        const new_best = left_path + 1 + right_path;
        const new_path = 1 + Math.max(left_path, right_path);
        if (new_best > left_best && new_best > right_best)
            return [new_best, new_path];
        else if (left_best > right_best)
            return [left_best, new_path];
        else
            return [right_best, new_path];
    }
    return helper(root)[0] - 1;
};
