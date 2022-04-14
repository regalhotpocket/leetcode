// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Minimum Bit Flips to Convert Number.
// Memory Usage: 39.5 MB, less than 88.24% of Java online submissions for Minimum Bit Flips to Convert Number.
// 04/14/2022 14:44
class Solution {
    public int minBitFlips(int start, int goal) {
        int diff = start ^ goal, count = 0;
        while (diff != 0) {
            count += diff & 0x1;
            diff >>= 1;
        }
        return count;
    }
}
