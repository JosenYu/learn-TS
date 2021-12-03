/*
 * @Author: yu li
 * @Date: 2021-12-03 20:41:21
 * @LastEditTime: 2021-12-03 21:41:12
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/K次取反后最大化的数组和.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/
 */
function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) =>
    Math.abs(b) - Math.abs(a)
  )


  for (let index = 0; index < nums.length; index++) {
    if (k > 0 && nums[index] < 0) {
      nums[index] = nums[index] * -1
      k--
    } 
  }

  if (k > 0 && k % 2 === 1) {
    nums[nums.length - 1] *= -1
  }

  return nums.reduce((total, num) => total + num)
};

var a = largestSumAfterKNegations(
  [2, -3, -1, 5, -4],
  2
)
console.log(a);