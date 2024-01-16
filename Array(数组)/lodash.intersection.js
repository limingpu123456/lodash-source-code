function intersection(...arrays){
  if (arrays.length === 0) {
      return []
  }
  //reduce不能加第二个参数，因为使用的初始值是传入的第一个数组
  return arrays.reduce((acc,currentArray) => {
    return acc.filter(element => currentArray.includes(element));
  })
}

// 示例用法
const result = intersection([2, 1], [2, 3],[]);
console.log(result); // 输出 [2]
