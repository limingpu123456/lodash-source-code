//intersection函数 返回一个包含所有传入数组交集元素的新数组。

function intersection(...arrays){
  if(arrays.length === 0){
    return []
  }
  const baseArray = arrays[0];

  const result = baseArray.filter((element)=>{
    //every这个方法会遍历数组中的每个元素，对每个元素执行指定的测试函数，只有当所有元素都满足条件时，every 方法才会返回 true，否则返回 false。
    return arrays.every((array)=>array.includes(element));
  })
  return result;
}

// 例子
const result = intersection([2, 1], [2, 3]);
console.log(result); // 输出 [2]