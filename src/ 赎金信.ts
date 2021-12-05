/*
 * @Author: yu li
 * @Date: 2021-12-05 12:36:43
 * @LastEditTime: 2021-12-05 13:09:37
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/ 赎金信.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * https://leetcode-cn.com/problems/ransom-note/
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  // if (magazine.length > ransomNote.length) return false
  // 1. 创建 hash map 将所有字符串累计
  const map: Map<string, number> = new Map()
  for (const str of magazine) {
    const _has: number | undefined = map.get(str)
    if (typeof _has === 'number') {
      map.set(str, _has + 1)
    } else {
      map.set(str, 1)
    }
  }
  // 2. 如果有字符串不在 map 中立即返回 false
  // 3. 如果 map 中的某一个字符串已经为 0 继续减则立即返回 false
  for (const str of ransomNote) {
    const _has: number | boolean = map.get(str) || false
    if (typeof _has === 'number' && _has <= 0 || !_has) return false
    map.set(str, _has - 1)
  }
  return true
};
var a = canConstruct(
  "aa",
  "aab"
)
console.log(a);