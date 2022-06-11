// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity
// Runtime: 56 ms, faster than 100.00% of TypeScript online submissions for Largest Number After Digit Swaps by Parity.
// Memory Usage: 45.2 MB, less than 100.00% of TypeScript online submissions for Largest Number After Digit Swaps by Parity.
// 04/10/2022 21:26
function largestInteger(num: number): number {
    const digits = String(num).split("").map(n => Number(n));
    const even = digits.filter(n => n % 2 === 0).sort();
    const odd = digits.filter(n => n % 2 === 1).sort();
    const result = [];
    for (const n of digits) {
        if (n % 2 === 0) {
            result.push(even.pop());
        } else {
            result.push(odd.pop());
        }
    }
    let final = 0;
    for (const n of result) {
        final *= 10;
        final += n;
    }
    return final;
};
