function dropRightWhile (array,predicate) {
  let index = array.length - 1
  while (index >= 0 && predicate(array[index])) {
    index--
  }
  return array.slice(0,index + 1)
}


var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

dropRightWhile(users, function(o) { return !o.active; });
// => [ { user: 'barney', active: true } ]
