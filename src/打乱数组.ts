/*
 * @Author: yu li
 * @LastEditors: yu li
 * @Date: 2021-11-16 11:44:49
 * @LastEditTime: 2021-11-22 19:09:21
 * @FilePath: \learn-ts\src\main.ts
 * @Description: 说明模块的作用
 * @README: 学习文献，参考资料等依赖说明
 */
class Solution {
  _nums: Array<number> = []
  _ownNums: Array<number> = []
  constructor(nums: number[]) {
    this._nums = [...nums]
    this._ownNums = [...nums]
  }

  reset(): number[] {
    return this._ownNums
  }

  shuffle(): number[] {
    let nums: number[] = this._nums
    nums.sort(() => Math.random() - .5)
    return nums
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */