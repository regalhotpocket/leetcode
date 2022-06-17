// https://leetcode.com/problems/maximum-subarray/
// Runtime: 148 ms, faster than 31.13% of TypeScript online submissions for Maximum Subarray.
// Memory Usage: 52.2 MB, less than 55.82% of TypeScript online submissions for Maximum Subarray.
// 03/20/2022 14:18
function maxSubArray(nums: number[]): number {
    var best = Number.NEGATIVE_INFINITY, cur = best;
    for (const n of nums) {
        cur = Math.max(n, cur + n);
        best = Math.max(best, cur);
    }
    return best;
};

// https://leetcode.com/problems/maximum-subarray
// Runtime: 112 ms, faster than 67.92% of TypeScript online submissions for Maximum Subarray.
// Memory Usage: 51.9 MB, less than 86.97% of TypeScript online submissions for Maximum Subarray.
// 06/16/2022 22:03
function maxSubArray(nums: number[]): number {
    var best = Number.NEGATIVE_INFINITY, cur = Number.NEGATIVE_INFINITY;
    nums.forEach(n => {
        cur = cur < 0 ? n : cur + n; 
        best = Math.max(best, cur);
    });
    return best;
};
