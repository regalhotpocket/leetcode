// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Runtime: 68 ms, faster than 99.45% of TypeScript online submissions.
// Memory Usage: 45.3 MB, less than 41.99% of TypeScript online submissions.
// 03/12/2022 12:49
function sortedArrayToBST(nums: number[]): TreeNode | null {
    function helper(left: number, right: number): TreeNode | null {
        if (left >= right)
            return null;
        const middle = left + ~~((right - left) / 2);
        return new TreeNode(nums[middle],
                            helper(left, middle),
                            helper(middle + 1, right));
    };
    return helper(0, nums.length);
};
