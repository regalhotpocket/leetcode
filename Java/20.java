// https://leetcode.com/problems/valid-parentheses
// Runtime: 1 ms, faster than 99.43% of Java online submissions for Valid Parentheses.
// Memory Usage: 40.3 MB, less than 87.11% of Java online submissions for Valid Parentheses.
// 05/05/2022 20:46
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == ')' && (stack.size() == 0 || stack.pop() != '('))
                return false;
            else if (c == ']' && (stack.size() == 0 || stack.pop() != '['))
                return false;
            else if (c == '}' && (stack.size() == 0 || stack.pop() != '{'))
                return false;
            else if ("({[".indexOf(c) != -1)
                stack.push(c);
        }
        return stack.size() == 0;
    }
}
