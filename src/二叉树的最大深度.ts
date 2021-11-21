/*
 * @Author: yu li
 * @Date: 2021-11-21 13:27:56
 * @LastEditors: yu li
 * @LastEditTime: 2021-11-21 14:18:50
 * @FilePath: /learn-ts/src/二叉树的最大深度.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * 力扣 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 学习资料 https://www.bilibili.com/video/BV1Nt411K75B?from=search&seid=8949765111439988183&spm_id_from=333.337.0.0
 * 
 * 如果没当前 root 节点直接返回 0
 * 左边 root.left 右边 root.right 进行延续递归，每次到达根节点的时候返回 0，到父级 0+1，每一次 return 都会+1
 * 最后 +1 是算上根节点次数
 * 
 */
// 假设
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};