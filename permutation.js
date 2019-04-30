/**
 * 全排列 用递归 深度优先
 * 递归关系式 递归出口
 * 全排列的递归关系式为  n的全排列 = n * (n-1的全排列)
 * 这个n可以通过将当前位和n所有的位置进行交换得到 比如 
 * [1234]全排列 = 1[234] 2[134] 3[124] 4[123] 的全排列 我们可以看到这个就是
 * 用 1 来和 1234每一个位置做交换得到的. 
 * 如果再加上去重的话那就是除了第一个外，如果
 * 碰到两个相等的就跳过。
 * 
 */



var a = [1,2,3,4];
var result = [];

var clone = function(a) {
    var b = [];
    a.forEach(element => {
        b.push(element);
    });
    return b;
}

var printPermutation = function(a) {
    if(result.length == 4) {
        console.log(result);
        return;
    }

    for(let i=0; i<a.length; i++) {
        let v = a[i];
        result.push(v);
        let new_a = clone(a);
        new_a.splice(i, 1);
        printPermutation(new_a);
        result.pop();
    }
}

printPermutation(a);
