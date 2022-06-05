
// https://leetcode.com/problems/contains-duplicate
// Runtime: 141 ms, faster than 40.88% of TypeScript online submissions for Contains Duplicate.
// Memory Usage: 51.4 MB, less than 51.54% of TypeScript online submissions for Contains Duplicate.
/  06/05/2022 16:41
function containsDuplicate(nums: number[]): boolean {
    return nums.length != (new Set<number>(nums)).size;
};

// Runtime: 82 ms, faster than 97.35% of TypeScript online submissions for Contains Duplicate.
// Memory Usage: 51.8 MB, less than 29.94% of TypeScript online submissions for Contains Duplicate.
// 06/05/2022 16:45
function containsDuplicate(nums: number[]): boolean {
    const found = new Set<number>();
    for (const num of nums) {
        if (found.has(num)) {
            return true;
        }
        found.add(num);
    }
    return false;
};
