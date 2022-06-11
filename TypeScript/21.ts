// https://leetcode.com/problems/merge-two-sorted-lists/
// Runtime: 108 ms, faster than 57.12% of TypeScript online submissions.
// Memory Usage: 44.4 MB, less than 71.10% of TypeScript online submissions.
// 03/12/2022 13:07
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
// Runtime: 68 ms, faster than 97.27% of TypeScript online submissions.
// Memory Usage: 45.3 MB, less than 25.40% of TypeScript online submissions.
// 03/12/2022 13:27
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        }
        else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
    else if (list1 == null)
        return list2;
    else
        return list1;
};
