/*
 * @Author: yu li
 * @Date: 2021-12-01 16:17:58
 * @LastEditTime: 2021-12-03 20:41:39
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/连续字符.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * 
 * leetCode https://leetcode-cn.com/problems/consecutive-characters/
 */
function maxPower(s: string): number {
  if (!s.length) return 0
  let count: number = 1, ans: number = 1
  for (let index = 0; index < s.length; index++) {
    if (s[index] === s[index + 1]) {
      ++count
      ans = Math.max(ans, count)
    } else {
      count = 1
    }
  }
  return ans
};