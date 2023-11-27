function flattenDeep(array) {
  let result = []

  for (const value of array) {
    if (Array.isArray(value)) {
      result.push(...flattenDeep(value))
    } else {
      result.push(value)
    }
  }

  return result;
}

flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
