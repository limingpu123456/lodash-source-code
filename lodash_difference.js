//difference方法，返回一个新数组，接受两个参数，创建一个array值的数组，每个值不包含在其给定的数组中

function difference(array,...values){
  //将所有排除的值合并为一个新的数组
  const exclusionArray = [].concat(...values);
  const result = array.filter(item => !exclusionArray.includes(item))
  return result;
}

const result = difference([3, 2, 1], [4, 2]);
console.log(result);
// => [3, 1]
