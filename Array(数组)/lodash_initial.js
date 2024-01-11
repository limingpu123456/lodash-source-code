//initial函数 去除最后一个元素

function initial(array){
  if(!Array.isArray(array) || array.length == 0){
    return [];
  }
  return array.slice(0,array.length-1)
}

// 例子
const result = initial([1, 2, 3]);
console.log(result); // 输出 [1, 2]
