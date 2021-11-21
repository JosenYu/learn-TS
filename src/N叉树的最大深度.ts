/*
 * @Author: yu li
 * @Date: 2021-11-21 12:28:12
 * @LastEditTime: 2021-11-21 14:58:23
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/N叉树的最大深度.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * 注意在没有子集时直接返回1 ，否则 math.max() =》-infi
 * infi 加减乘除都是infi 所以在 `root.children.length == 0` 进行判断避免出现infi


作者：zhanzekun
链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/solution/559-n-cha-shu-de-zui-da-shen-du-by-zhanz-1zch/
 */

function maxDepth(root: Node): number {
  if (!root) {
    return 0
  }
  if (root.children.length == 0) {
    return 1
  }
  let childrenDepth = []
  root.children.forEach(child => {
    childrenDepth.push(maxDepth(child))
  })
  return Math.max(...childrenDepth) + 1;
};
