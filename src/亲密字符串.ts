/*
 * @Author: yu li
 * @Date: 2021-11-23 23:29:29
 * @LastEditTime: 2021-11-24 23:53:26
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/亲密字符串.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
长度不相等，返回false
长度相等时，有重复元素，返回true。无重复元素，返回false
遍历字符串，若找到第3处不同的，返回false
最后为true的条件：有2处不同，且不同的位置交换后对应的元素相等
 */



function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  var sArr = s.split('')
  if (s === goal) {
    var sSet: any[] = [...new Set(sArr)]
    // 长度一样表示没有重复项，不能对调重复项，所以不可能相同
    if (sSet.length === s.length) return false
    return true
  }
  let l: number = -1, h: number = -1
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (l === -1) {
        l = i
      } else if (h === -1) {
        h = i
      } else {
        return false
      }
    }
  }
  if (
    l > -1 && h > -1 &&
    s[l] === goal[h] && s[h] === goal[l]
  ) {
    return true
  }
  return false
};
var a = buddyStrings(
  "ab",
  "ca"
)

console.log(a);
