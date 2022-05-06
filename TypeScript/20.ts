// https://leetcode.com/problems/valid-parentheses/
// Runtime: 125 ms, faster than 22.48% of TypeScript online submissions for Valid Parentheses.
// Memory Usage: 45 MB, less than 19.21% of TypeScript online submissions for Valid Parentheses.
// 03/14/2022 10:52
function isValid(s: string): boolean {
    const stack = [];
    for (const c of s) {
        if (['(','{','['].includes(c))
            stack.push(c);
        else if  (((c == ')' && stack[stack.length - 1] == '(')) ||
                  ((c == '}' && stack[stack.length - 1] == '{')) ||
                  ((c == ']' && stack[stack.length - 1] == '[')))
            stack.pop();
        else
            return false;
    }
    return stack.length == 0;
};
