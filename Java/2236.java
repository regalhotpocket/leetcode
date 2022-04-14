// https://leetcode.com/problems/root-equals-sum-of-children/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Root Equals Sum of Children.
// Memory Usage: 40.3 MB, less than 80.63% of Java online submissions for Root Equals Sum of Children.
// 04/14/2022 14:33
class Solution {
    public boolean checkTree(TreeNode root) {
        return root.val == root.left.val + root.right.val;
    }
}
