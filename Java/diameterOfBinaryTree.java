// https://leetcode.com/problems/diameter-of-binary-tree/submissions/
// 03/12/2022 19:39
// Runtime: 2 ms, faster than 16.28% of Java online submissions for Diameter of Binary Tree.
// Memory Usage: 43.7 MB, less than 16.64% of Java online submissions for Diameter of Binary Tree.
class Solution {
    private int[] helper(TreeNode node) {
        if (node == null) {
            int[] result = {0, 0};
            return result;
        }
        int[] left = helper(node.left);
        int[] right = helper(node.right);
        int new_best = left[1] + 1 + right[1];
        int new_path = 1 + Math.max(left[1], right[1]);
        if (new_best > left[0] && new_best > right[0]) {
            int[] result = {new_best, new_path};
            return result;
        }
        if (left[0] > right[0]) {
            int[] result = {left[0], new_path};
            return result;
        }
        int[] result = {right[0], new_path};
        return result;
    }
    public int diameterOfBinaryTree(TreeNode root) {
        return helper(root)[0] - 1;
    }
}
