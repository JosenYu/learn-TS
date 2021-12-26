/*
 * @Author: yu li
 * @Date: 2021-12-26 00:22:56
 * @LastEditTime: 2021-12-26 10:59:31
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/Bigram分词.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 * 
 * https://leetcode-cn.com/problems/occurrences-after-bigram/
 */

function findOcurrences(text: string, first: string, second: string): string[] {
  let ans: string[] = []
  var texts: Array<string> = text.split(' ')
  for (let index = 0; index < texts.length; index++) {
    const element1 = texts[index];
    const element2 = texts[index + 1];
    if (element1 === first && element2 === second) {
      const element3 = texts[index + 2]
      element3 && ans.push(element3)
    }
  }
  console.log(ans);
  return ans
};
