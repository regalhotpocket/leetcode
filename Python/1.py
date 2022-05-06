# https://leetcode.com/problems/two-sum
# Runtime: 125 ms, faster than 41.13% of Python3 online submissions for Two Sum.
# Memory Usage: 15.2 MB, less than 50.04% of Python3 online submissions for Two Sum.
# 05/05/2022 20:18
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        found: dict[int, int] = {}
        for i, num in enumerate(nums):
            comp: int = target - num
            if comp in found:
                return [found[comp], i]
            found[num] = i
        return [-1, -1]
