// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/
// Runtime: 56 ms, faster than 100.00% of TypeScript online submissions for Minimum Number of Operations to Convert Time.
// Memory Usage: 45.1 MB, less than 8.70% of TypeScript online submissions for Minimum Number of Operations to Convert Time.
// 04/11/2022 18:45
function convertTime(current: string, correct: string): number {
    const [currentHour, currentMin]  = current.split(":").map(n => Number(n));
    const currentTotal = currentMin + currentHour * 60;
    const [correctHour, correctMin]  = correct.split(":").map(n => Number(n));
    const correctTotal = correctMin + correctHour * 60;
    const diff = correctTotal - currentTotal;
    return Math.floor(diff / 60) +
           Math.floor(diff % 60 / 15) +
           Math.floor(diff % 60 % 15 / 5) +
           Math.floor(diff % 60 % 15 % 5);
};
