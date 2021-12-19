/*
 * @Author: yu li
 * @Date: 2021-12-18 15:11:23
 * @LastEditTime: 2021-12-18 15:35:22
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/甲板上的战舰.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * 
 * https://leetcode-cn.com/problems/battleships-in-a-board/solution/cpython3javagojavascript-1tong-ji-mei-sa-wdvw/
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board:number[]) {
  //--------其实就是统计每艘战舰的head
  const Row = board.length;
  const Col = board[0].length;
  let res = 0;
  for (let r = 0; r < Row; r++) {
    for (let c = 0; c < Col; c++) {
      if (board[r][c] == 'X') {
        if (0 <= r - 1 && board[r - 1][c] == 'X') {
          continue;
        }
        if (0 <= c - 1 && board[r][c - 1] == 'X') {
          continue;
        }
        res++;
      }
    }
  }
  return res;

};