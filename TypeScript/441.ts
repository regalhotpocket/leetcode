// https://leetcode.com/problems/arranging-coins/
// Runtime: 107 ms, faster than 92.86% of TypeScript online submissions.
// Memory Usage: 44.9 MB, less than 46.43% of TypeScript online submissions.
// Solution accepted at 03/12/2022 18:45
// NOTE: What is the runtime on this? Seems bounded by O(n), but it seems to
//       be something like a reverse factorial decay. Don't know how to analyze.
function arrangeCoins(n: number): number {
    for (var r = 2, c = 1; c <= n; c += r, r += 1);
    return r - 2;
};
