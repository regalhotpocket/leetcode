// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array
// Runtime: 115 ms, faster than 21.05% of TypeScript online submissions for Check If String Is a Prefix of Array.
// Memory Usage: 45.3 MB, less than 5.26% of TypeScript online submissions for Check If String Is a Prefix of Array.
// 04/11/2022 19:13
function isPrefixString(s: string, words: string[]): boolean {
    for (var i = 0, j = 0, k = 0; i < s.length; i++, k++){
        if (k === words[j].length) {
            k = 0;
            j += 1;
        }
        if (j === words.length)
            return false;
        if (s[i] != words[j][k])
            return false;
    }
    return words[j].length === k; 
};
