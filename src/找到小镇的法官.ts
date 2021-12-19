/*
 * @Author: yu li
 * @Date: 2021-12-19 22:12:16
 * @LastEditTime: 2021-12-20 00:23:21
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/找到小镇的法官.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * 
 * https://leetcode-cn.com/problems/find-the-town-judge/
 * 
 * 读完题目，提取有效信息：
 * 给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示编号为 a 的人信任编号为 b 的人。
1. 小镇的法官不相信任何人。             => 法官不会出现在 trust[i][0]
2. 每个人相信法官（除了法官外）          => N - 1 个人相信法官
3. 只有一个人同时满足属性 1 和属性 2 。  => 这个人是法官 
 */

function findJudge(n: number, trust: number[][]): number {
  // 特殊情况
  if (n === 1) return 1;
  // 建立map统计信任人数
  const map1: Map<number, any> = new Map()
  // 先将所有人建立档案
  for (let z = 1; z <= n; z++) map1.set(z, 0)
  trust.forEach((item, index) => {
    // 信任别人的排除 原则 1
    map1.delete(item[0])
    // 识别 item【1】是否被删除过，由于·原则1·所以法官不会被删除
    const i2 = map1.has(item[1]) && map1.get(item[1])
    if (i2 || i2 === 0) map1.set(item[1], i2 + 1)
  })
  for (const [key, value] of map1.entries()) {
    // 原则 2
    if (n - 1 === value) return key
  }
  return -1
};

const fj: number = findJudge(
  2,
  [[1, 2], [2, 1]]
)
console.log(fj);