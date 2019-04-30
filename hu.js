/**
 * 麻将的胡牌算法  没有癞子
 * 麻将的存储可以用多维数组 这样很容易的可以定位到位置
 * 万：0*16+[1-9]
 * 条：1*16+[1-9]
 * 筒: 2*16+[1-9]
 * 
 * 对传入的数组进行基数排序，生成麻将多维数组，先检测对子，将对子的所有可能压入一个栈，数据结构就是一个值，
 * 新建一个还原栈原来还原所有的操作  这样可以避免新分配数组
 * 
 * while(!stack.empty()) {
 *      将还原栈还原如果有的话
 *      let i = stack.pop();
 *      将对子从麻将多维数组删除
 *      将对子压入还原栈
 *      for(let i=0; i<3; i++) {
 *          let array = 多维数组[i];
 *          for(let j = 0; j<array.length; j++) {
 *              if(array[j] == 1) { //只能是顺子
 *                  if(j>7) return false;//不会胡
 *                  if(array[j+1] > 0 && array[j+2] > 0) {
 *                      将j,j+1,j+2压入栈
 *                  }else{
 *                      return false;
 *                  }
 *              }else((array[j] == 2) { //只能是顺子
 *                  if(j>7) return false;//不会胡
 *                  if(array[j+1] > 1 && array[j+2] > 1) {
 *                      将j,j+1,j+2压入栈 两对
 *                  }else{
 *                      return false;
 *                  }
 *              }else((array[j] == 3) { //只能是碰
 *                   将j压入栈 3个
 *              }else((array[j] == 4) { //不可能是组成杆 如果是组成杆的话 3个也胡了 那么只能是3+1
 *                   将j压入栈 3个, 再判断=1情形
 *                   if(j>7) return false;//不会胡
 *                   if(array[j+1] > 0 && array[j+2] > 0) {
 *                      将j,j+1,j+2压入栈
 *                   }else{
 *                        return false;
 *                   }
 *              }
 *          }
 *      }
 *      return true; //一种胡牌可能
 * }
 * 
 */


 