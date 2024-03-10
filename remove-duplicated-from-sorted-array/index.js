// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Use a pointer to track if we need to swap elements
// If nums[pointer] < nums[i] -> Swap nums[i] with nums[pointer + 1]
// Then increase pointer by 1
const removeDuplicates = function (nums) {
  let pointer = 0
  let result = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[pointer] < nums[i]) {
      const temp = nums[pointer + 1]
      nums[pointer + 1] = nums[i]
      nums[i] = temp
      pointer = pointer + 1
      result = result + 1
    }
  }

  return result
};

const main = () => {
  console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
}

main()