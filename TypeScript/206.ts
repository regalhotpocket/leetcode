// https://leetcode.com/problems/reverse-linked-list/
// Runtime: 106 ms, faster than 39.49% of TypeScript online submissions for Reverse Linked List.
// Memory Usage: 45.5 MB, less than 22.30% of TypeScript online submissions for Reverse Linked List.
// 06/16/2022 22:46
function reverseList(head: ListNode | null): ListNode | null {
    var last: ListNode | null = null;
    while (head) {
        var tmp = head.next;
        head.next = last;
        last = head;
        head = tmp;
    }
    return last;
};
