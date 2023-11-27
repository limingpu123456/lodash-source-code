function fromPairs(pairs) {
  return pairs.reduce((result,[key,value]) => {
    result[key] = value
    return result;
  },{})
}

fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
