function flatten(array) {
  const result = []
  for (let i = 0; i < array.length; i++){
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++){
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i])
    }
  }
  return result;
}

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
