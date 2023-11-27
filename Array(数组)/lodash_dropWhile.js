function dropWhile (array,predicate) {
  let index = 0
  while (index < array.length && predicate(array[index])) {
    index++
  }
  return array.slice(index,array.length)
}


var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
