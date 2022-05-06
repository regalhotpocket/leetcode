// https://leetcode.com/problems/two-sum/
// Runtime: 88 ms, faster than 84.33% of TypeScript online submissions for Two Sum.
// Memory Usage: 45.3 MB, less than 30.34% of TypeScript online submissions for Two Sum.
// 03/14/2022 10:38
function twoSum(nums: number[], target: number): number[] {
    const found = new Map<number, number>();
    for (const [i, v] of nums.entries()) {
        const x = target - v;
        if (found.has(x))
            return [found.get(x), i];
        found.set(v, i);
    }
};
