// https://leetcode.com/problems/climbing-stairs/
// Runtime: 71 ms, faster than 79.22% of TypeScript online submissions for Climbing Stairs.
// Memory Usage: 44.1 MB, less than 5.26% of TypeScript online submissions for Climbing Stairs.
// 03/20/2022 14:43
function climbStairs(n: number): number {
    var oneBack = 0, twoBack = 0;
    for (var i = 0; i < n; i++)
        [oneBack, twoBack] = [oneBack + twoBack, oneBack + 1]; 
    return oneBack + 1;
};
