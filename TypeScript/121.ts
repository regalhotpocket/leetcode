// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Runtime: 171 ms, faster than 8.69% of TypeScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 52.2 MB, less than 28.32% of TypeScript online submissions for Best Time to Buy and Sell Stock.
// 05/28/2022 00:26
function maxProfit(prices: number[]): number {
    var best = 0;
    var lowest = Number.POSITIVE_INFINITY;
    prices.forEach(n => {
        best = Math.max(n - lowest, best);
        lowest = Math.min(lowest, n);
    });
    return best;
};
