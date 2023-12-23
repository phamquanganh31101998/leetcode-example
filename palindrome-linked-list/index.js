// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // remain the original list
  let pointer = head
  const stack = []
  let result = true

  // push all item into stack
  while (pointer !== null) {
    stack.push(pointer.val)
    pointer = pointer.next
  }

  // Traverse stack in backward order to compare original item with original items pushed into stack
  while(head !== null) {
    const item = stack.pop()
    if (item !== head.val) {
      result = false
      break
    }
    head = head.next
  }

  return result
};