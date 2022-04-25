# https://leetcode.com/problems/add-two-numbers/
# Runtime: 89 ms, faster than 54.81% of Python3 online submissions for Add Two Numbers.
# Memory Usage: 14 MB, less than 10.81% of Python3 online submissions for Add Two Numbers.
# 04/25/2022 18:32	
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        n1: Optional[ListNode] = l1
        n2: Optional[ListNode] = l2
        head: ListNode = ListNode()
        cur: ListNode = head
        carry: int = 0
        while n1 or n2 or carry:
            v1: int = n1.val if n1 else 0
            v2: int = n2.val if n2 else 0
            v3 = v1 + v2 + carry
            if v3 > 9:
                carry = 1
                v3 -= 10
            else:
                carry = 0
            n: ListNode = ListNode(val=v3)
            cur.next = n
            cur = cur.next
            if n1:
                n1 = n1.next
            if n2:
                n2 = n2.next
        return head.next
