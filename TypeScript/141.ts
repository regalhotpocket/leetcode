// https://leetcode.com/problems/linked-list-cycle/
// Runtime: 87 ms, faster than 84.88% of TypeScript online submissions for Linked List Cycle.
// Memory Usage: 46 MB, less than 28.68% of TypeScript online submissions for Linked List Cycle.
// 06/16/2022 22:59
function hasCycle(head: ListNode | null): boolean {
    if (!head) {
        return false;
    }
    var slow = head, fast = head.next;
    while (fast && fast.next) {
        if (slow == fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};
