// https://leetcode.com/problems/search-suggestions-system
// Runtime: 192 ms, faster than 72.60% of TypeScript online submissions for Search Suggestions System.
// Memory Usage: 54.4 MB, less than 63.01% of TypeScript online submissions for Search Suggestions System.
// 06/18/2022 23:32
function suggestedProducts(products: string[], searchWord: string): string[][] {
    const result: string[][] = [];
    products.sort();
    for (var i = 0; i < searchWord.length; i++) {
        products = products.filter(s => s[i] == searchWord.charAt(i))
        result.push(products.slice(0, 3));
    }
    return result;
};
