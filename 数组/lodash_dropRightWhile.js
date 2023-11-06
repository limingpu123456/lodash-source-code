function dropRightWhile(){

}

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

dropRightWhile(users, function(o) { return !o.active; });
// => [ { user: 'barney', active: true } ]
 
dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => [ { user: 'barney', active: true },{ user: 'fred', active: false } ]
 
dropRightWhile(users, ['active', false]);
// => [ { user: 'barney', active: true } ]
 
dropRightWhile(users, 'active');
//[ { user: 'barney', active: true },{ user: 'fred', active: false },{ user: 'pebbles', active: false } ]