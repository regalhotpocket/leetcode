// https://leetcode.com/problems/merge-two-sorted-lists/submissions/
// Solution accepted on 03/12/2022 13:07
// Runtime: 108 ms, faster than 57.12% of TypeScript online submissions
// Memory Usage: 44.4 MB, less than 71.10% of TypeScript online submissions
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const start = new ListNode();
    var cur = start;
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        }
        else {
            cur.next = list2
            list2 = list2.next;
        }
        cur = cur.next;
    }
    if (list1 != null)
        cur.next = list1
    else if (list2 != null)
        cur.next = list2
    return start.next;
};
