// https://leetcode.com/problems/same-tree/
// Runtime: 74 ms, faster than 82.06% of TypeScript online submissions for Same Tree.
// Memory Usage: 44.7 MB, less than 39.50% of TypeScript online submissions for Same Tree.
// 06/18/2022 16:44
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q != null)
        return false;
    if (p != null && q == null)
        return false;
    if (p == null && q == null)
        return true;
    if (p.val != q.val)
        return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
