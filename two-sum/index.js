// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  // value -> position
  const map = new Map()

  let result = []

  for (let i = 0; i < nums.length; i++) {
    // find difference of current number in map
    // if presented, return the position of current number position and its difference position
    const difference = target - nums[i]

    if (map.has(difference)) {
      result = [i, map.get(difference)]
      break
    } else {
      map.set(nums[i], i)
    }
  }

  console.log(result)
  return result
}

twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)
twoSum([3,3], 6)