// https://leetcode.com/problems/maximum-subarray/submissions/
// 03/20/2022 14:18
// Runtime: 148 ms, faster than 31.13% of TypeScript online submissions for Maximum Subarray.
// Memory Usage: 52.2 MB, less than 55.82% of TypeScript online submissions for Maximum Subarray.

function maxSubArray(nums: number[]): number {
    var best = Number.NEGATIVE_INFINITY, cur = best;
    for (const n of nums) {
        cur = Math.max(n, cur + n);
        best = Math.max(best, cur);
    }
    return best;
};
