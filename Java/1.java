// https://leetcode.com/problems/two-sum/
// Runtime: 1 ms, faster than 99.72% of Java online submissions for Two Sum.
// Memory Usage: 42.3 MB, less than 90.35% of Java online submissions for Two Sum.
// 04/14/2022 21:31
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> found = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (found.containsKey(need)) {
                return new int[] {found.get(need), i};
            }
            found.put(nums[i], i);
        }
        return new int[] {-1, -1};
    }
}
