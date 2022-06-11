// https://leetcode.com/problems/product-of-array-except-self/
// Runtime: 189 ms, faster than 23.41% of TypeScript online submissions for Product of Array Except Self.
// Memory Usage: 54.4 MB, less than 65.84% of TypeScript online submissions for Product of Array Except Self.
// 06/10/2022 23:15
function productExceptSelf(nums: number[]): number[] {
    let suffix: number[] = [];
    let cur: number = 1;
    for (let i = nums.length-1; i >= 0 ; i--) {
        suffix.push(cur);
        cur *= nums[i];
    }
    let result: number[] = [];
    suffix = suffix.reverse();
    cur = 1;
    for (let i = 0; i < nums.length; i++) {
        result.push(suffix[i] * cur);
        cur *= nums[i];
    }
    return result;
};
