/*
 * @Author: yu li
 * @Date: 2021-12-18 13:47:58
 * @LastEditTime: 2021-12-18 14:55:03
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/换酒问题.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * 
 * https://leetcode-cn.com/problems/water-bottles/
 */



function numWaterBottles(numBottles: number, numExchange: number): number {
  // 余下的盖子
  var remain: number = Math.floor(numBottles / numExchange),
    count: number = numBottles + remain
  remain += Math.floor(numBottles % numExchange)
  while (remain >= numExchange) {
    var tmpRemain = remain
    tmpRemain = Math.floor(remain / numExchange)
    count += tmpRemain
    tmpRemain += Math.floor(remain % numExchange)
    remain = tmpRemain
  }
  return count
};

const aa: number = numWaterBottles(
  19,
  4
)
console.log(aa);